# Tic Tac Toe

## Project Overview

### The Brief

#### The rules are as follows:

- There are two players (X & O)
- Players take turns until the game is over
- A player can claim a field if it is not already taken
- A turn ends when a player claims a field
- A player wins if they claim all the fields in a row, column or diagonal
- A game is over if a player wins
- A game is over when all fields are taken

## Design Approach

### Tech Stack

I am going to use Node.js and jQuery
For testing, using the zombie browser, mocha for testing framework and chai for more assertions (my preferred 'expect' over 'assert')
Using Jasmine for unit testing the models

### Nouns and verbs analysis

| Nouns   |   Verbs |
|---------|---------|
|game     | play    |
|grid     |         |
|player   |         |
|name     |         |
|box      |         |


### User Stories


```
As a game player,
So I can play Tic Tac Toe,
I want to be able sign up as a player

As a player,
So I can play Tic Tac Toe against another player,
I want a second player to be able to sign up

As a player,
So I can play Tic Tac Toe,
I want to be able to see the board

As a player,
So I can play Tic Tac Toe, 
I want to be able to click on a square

As a player,
So I can play an X (if I am player X),
I want the game to know which player I am
```


### Domain Modelling

#### Game

Game should have the two players, simply stored as strings.

Game should have an instance of the grid object.

Nouns: player1Name, player2Name, grid
Verbs: setPlayerName(number, name), grid(), setGridSquare(square, value), resetGrid(), box(index)

#### Grid

Grid should have 9 instances of the box object.

Grid should contain logic for checking whether a game is won or a draw, perhaps this will be contained in a separate object.

Nouns: boxes
Verbs: setBoxState()

#### Box

Box should have the state of either being empty or containing an X or O

Nouns: state
Verbs: setState()