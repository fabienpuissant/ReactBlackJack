import React, { Component } from 'react'
import Player from '../Player/Player';
import Bank from '../Bank/Bank';

export class Deck extends Component {

    constructor(props) {
        super(props);
        const cards = this.initCards();
        this.state = {
            cards: cards,
            end: false,

        };
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
                });
            }
        }
        return cards;
    }

    endGame(playerScore) {
        console.log(playerScore);
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
        const initialCards = this.initCards();
        console.log(initialCards.length);
        this.state.cards = initialCards;
        this.setState({
            end: false,
        });
        console.log(this.state.cards.length);
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
