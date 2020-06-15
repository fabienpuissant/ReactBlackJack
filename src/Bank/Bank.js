import React, { Component } from 'react'

export class Bank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            bankcards: this.props.cards,
            score: this.props.score,
        }
    }

    render() {
        return (
            <div className="container mt-4">
                <h1>
                    Bank :
                     </h1>
                <h2>Score : {this.state.score}</h2>
                <div className="row mt-4" >
                    {
                        this.state.bankcards.map((card, index) => (

                            <img key={index} className="card ml-4 mt-4" src={card.imagePath} alt="imageCard" />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default Bank
