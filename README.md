# assigment
Write a simple class in node.js  to represent a deck of cards with operations to shuffle the deck and to deal one card.

While not a requirement today, a likely future enhancement is the need to deal all the cards in a deck.

While not strictly required, we value usage instructions, nicely-modeled data, automated tests, and thoughtful consideration of architectural decisions and simplicity vs completeness trade-offs.

Please note: For the record, and to be totally clear, we've drafted a solution for this problem so this is not spec work ( http://www.no-spec.com/faq/ ).
Whether yours matches our draft (which may now be implemented) or is completely different is insignificant.
We're just trying to see the tools in your toolbox that you'd use to slice this real-life challenge.

One of our developers spent two hours defining a solution. We would expect you to take around the same amount of time

# Postmortem

I approached the problem with an overall look for simplicity.
Given the nature of th problem, I chose to use a functional "style" paradigm.

Here are some further notes:

Own Code:
I also chose to wrote my own shuffle function, but in practice I would have used a npm module with a passable shuffle and random function - allow the code to be extensible, configurable and re-using existing code

Mutable?:
One area that is bothersome is the `ops.deal` function. Should this function be idempotent and not mutate the deck?
To stay true to principles, it would be nice for it to not change the deck - but for correctness in the concept of dealing a card, it should mutate the deck array/obj.

Ops Object:
For absolute simplicity I chose to add predicate functions in an object within the same file as my code -  in practice i'd separate those into another module

Code Style:
I chose to use the default code style that comes with WebStorm - I am used to not using semi-colons - but for simplicity chose to just keep as default