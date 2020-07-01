import React, { Component } from 'react'
import './Player.css';

export class Player extends Component {

    constructor(props) {
        super(props);
        const card = this.props.randomCard();
        console.log(card.value);
        this.state = {
            playercards: Array(card),
            score: card.value,
            end: false,
            playerName: null,
        }
        this.handleEndClick = this.handleEndClick.bind(this);
        this.handleRestartClick = this.handleRestartClick.bind(this);
    }

    handleCLick() {

        const newCards = [...this.state.playercards];
        const card = this.props.randomCard();
        newCards.push(card);
        this.setState({
            playercards: newCards,
        });

        this.setState((prevState, props) => ({
            score: prevState.score + card.value
        }));



        //Check the end of the game 
        if (this.state.score + card.value >= 21) {
            if (!this.state.end) {
                this.props.endGame(this.state.score);
            }
            this.setState({
                end: true,
            })
            return;
        }

    }

    handleEndClick() {
        if (!this.state.end) {
            this.props.endGame(this.state.score)
        }
        this.setState({
            end: true,
        });

    }

    handleRestartClick() {
        const card = this.props.randomCard();
        this.setState({
            playercards: [card],
            score: card.value,
            end: false,
        });
        this.props.restartGame();
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>
                        Player :
                     </h1>
                    <h2>Score : {this.state.score}</h2>
                    <div className="row mt-4" >
                        {
                            this.state.playercards.map((card, index) => (

                                <img key={index} className="card ml-4" src={card.imagePath} alt="imageCard" />
                            ))
                        }
                    </div>
                    <div className="row">
                        <button className="btn btn-primary mt-4" onClick={() => this.handleCLick()}>Add a card</button>
                        <button className="btn btn-primary mt-4 ml-4" onClick={() => this.handleEndClick()}>Stop</button>
                        <button className="btn btn-primary mt-4 ml-4" onClick={() => this.handleRestartClick()}>Restart</button>
                    </div>
                </div>

            </>

        )
    }
}

export default Player
