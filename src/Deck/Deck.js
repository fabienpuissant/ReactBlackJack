import React, { Component } from 'react'
import Player from '../Player/Player';
import Bank from '../Bank/Bank';
import { mount, render, shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export class Deck extends Component {

    initialState = {
        cards: this.initCards(),
        end: false,
    }

    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.randomCard = this.randomCard.bind(this);
        this.endGame = this.endGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
        this.initCards = this.initCards.bind(this);

    }

    randomCard() {
        const newCards = this.state.cards.slice();
        const index = Math.floor(Math.random() * Math.floor(newCards.length));
        const card = newCards[index];
        newCards.splice(index, 1);
        this.setState({
            cards: newCards
        });
        return card;
    }


    initCards() {
        const cardNumber = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        const cardSymbol = ['D', 'S', 'C', 'H'];
        const cards = [];

        for (let i = 0; i < cardSymbol.length; i++) {
            for (let j = 0; j < cardNumber.length; j++) {
                var value = 0;
                if (isNaN(parseInt(cardNumber[j]))) {
                    value = 10;
                } else {
                    value = parseInt(cardNumber[j]);
                }
                cards.push({
                    imagePath: "Images/" + cardNumber[j] + cardSymbol[i] + ".png",
                    value: value,
                    color: cardSymbol[i],
                    number: cardNumber[j]
                });
            }
        }
        return cards;
    }

    endGame(playerScore) {
        var bankPlay = true;
        var bankScore = 0;
        var card;
        var bankCards = [];
        while (bankPlay) {
            card = this.randomCard();
            bankCards.push(card);
            bankScore += card.value;
            if (playerScore > 21) {
                bankPlay = false;
            }
            if (bankScore > 21 || (bankScore >= playerScore && bankScore <= 21)) {
                bankPlay = false;
            }
        }

        this.setState({
            end: true,
            bankCards: bankCards,
            bankScore: bankScore,
        });
    }

    restartGame() {
        const newCards = this.initCards();
        this.setState({
            cards: newCards,
            end: false,
        });
    }

    render() {

        return (
            <>
                <Player randomCard={this.randomCard} endGame={this.endGame} restartGame={this.restartGame} />
                {this.state.end &&
                    <Bank cards={this.state.bankCards} score={this.state.bankScore} />
                }
            </>
        )
    }
}


export default Deck
