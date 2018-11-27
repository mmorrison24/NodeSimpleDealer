const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits  =['spades', 'clubs', 'hearts', 'diamond'];

const ops = {
    pickInRage : (arr, len) => arr.splice( Math.floor(Math.random() * len), 1 ).shift(),
    shuffle : deck => {
        let deckClone = deck.slice(0);

        return deck.map( (val, i ) => {
            return  ops.pickInRage(deckClone, deckClone.length - i )
        });
    },
    deal : ( deck /*, isFullDeckDeal = false*/ ) => {
        // deals card from the top or bottom of the deck
        return deck.shift()

    }
};

class CardDeck {
    constructor() {
        this.deck = suits.reduce((acc, suit) => (
            acc.concat(ranks.map( rank => (
                {suit: suit, rank: rank, card: `${suit}  ${rank}`}
            )))
        ), []);

    }

    shuffle() {
        this.deck = ops.shuffle( this.deck );
    }

    deal() {
        return ops.deal( this.deck );
    }
}

(function main (){
    let game = new CardDeck();

    const shuffled =  ops.shuffle(game.deck);
    //console.log(shuffled); // this is a shallow copied deck that is shuffled

    game.shuffle();
    console.log(game.deal());
    console.log(game);
})();

