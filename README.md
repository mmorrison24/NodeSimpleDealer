# assignment
Write a simple class in node.js  to represent a deck of cards with operations to shuffle the deck and to deal one card.

While not a requirement today, a likely future enhancement is the need to deal all the cards in a deck.

While not strictly required, we value usage instructions, nicely-modeled data, automated tests, and thoughtful consideration of architectural decisions and simplicity vs completeness trade-offs.

Please note: For the record, and to be totally clear, we've drafted a solution for this problem so this is not spec work ( http://www.no-spec.com/faq/ ).
Whether yours matches our draft (which may now be implemented) or is completely different is insignificant.
We're just trying to see the tools in your toolbox that you'd use to slice this real-life challenge.

One of our developers spent two hours defining a solution. We would expect you to take around the same amount of time

# Postmortem

I approached the problem with an overall look for simplicity.
Given the nature of the problem, I chose to use a functional "style" paradigm.

Here are some further notes:

#### Own Code:

I also chose to write my own shuffle function, but in practice I would have used a npm module with a passable shuffle and random function - allowing the code to be extensible, configurable while re-using existing code

#### Mutable?:

One area that is bothersome is the `ops.deal` function. Should this function be idempotent and not mutate the deck?
To stay true to principles, it would be nice for it to not change the deck - but for correctness in the concept of dealing a card, I thought best to mutate the deck array/obj and `shift` instead of `slice`.

#### Simplicity vs Completeness:

In my interpretation of the spirit of the guidelines, and leveraging the functional nature of the code - I thought it best to have my `CardDeck` class mostly representing a deck's data structure. This allows extensibility as the `ops` functions are now applicable for other deck types (uno cards, magic cards), and not tied to any particular data structure or implementation of a deck concept. While also being simpler to reason about.

In addition, the code structure encourages good best practices and solves the problem surface area quite efficiently without adding undo code. Code vs simplicity I thought this was a good compromise. If needed in the future, a `Game` class could be added to represent players, and hold player hands etc. 

#### Ops Object:

For absolute simplicity I chose to add predicate functions in an object within the same file as my code -  in practice i'd separate those into another module

#### Code Style:

I chose to use the default code style that comes with WebStorm - I am used to not using semi-colons - but for simplicity chose to just keep as default