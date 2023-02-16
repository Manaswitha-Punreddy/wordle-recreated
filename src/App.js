import React from "react";
import "./App.css";

const letterCount = 5;
const numberOfGuesses = 5;
const gameBoard = [];
const keyboard = [];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      gameBoard: [],
      keyboard: [],
    };
  }

  componentDidMount() {
    this.createGameBoard();
    this.createKeyboard();
  }

  createGameBoard() {
    for (let guess = 1; guess <= numberOfGuesses; guess += 1) {
      const guessBoard = [];
      for (let letters = 1; letters <= letterCount; letters += 1) {
        guessBoard.push(
          <div
            key={Math.random()}
            style={{
              border: "1px solid black",
              width: "50px",
              height: "50px",
            }}
          ></div>
        );
      }

      gameBoard.push(
        <div
          key={Math.random()}
          style={{ display: "flex", gap: "5px", paddingTop: "5px" }}
        >
          {guessBoard}
        </div>
      );
    }

    this.setState({ gameBoard: gameBoard });
  }

  createKeyboard() {
    const rows = [];
    const firstRow = [];
    const secondRow = [];
    const thirdRow = [];

    firstRow.push(
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        Q
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        W
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        E
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        R
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        T
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        Y
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        U
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        I
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        O
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        P
      </button>
    );

    secondRow.push(
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        A
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        S
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        D
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        F
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        G
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        H
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        J
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        K
      </button>,
      <button
        type="button"
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        L
      </button>
    );

    thirdRow.push(
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "75px",
          height: "50px",
        }}
      >
        Enter
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        Z
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        X
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        C
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        V
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        B
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        N
      </button>,
      <button
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "40px",
          height: "50px",
        }}
      >
        M
      </button>,
      <button
        type="button"
        key={Math.random()}
        style={{
          border: "1px solid black",
          width: "85px",
          height: "50px",
        }}
      >
        Backspace
      </button>
    );
    keyboard.push(
      <div
        key={Math.random()}
        style={{
          display: "flex",
          gap: "5px",
          paddingTop: "5px",
          paddingLeft: "15px",
        }}
      >
        {firstRow}
      </div>,
      <div
        key={Math.random()}
        style={{
          display: "flex",
          gap: "5px",
          paddingTop: "5px",
          paddingLeft: "40px",
        }}
      >
        {secondRow}
      </div>,
      <div
        key={Math.random()}
        style={{ display: "flex", gap: "5px", paddingTop: "5px" }}
      >
        {thirdRow}
      </div>
    );

    this.setState({ keyboard: keyboard });
  }

  render() {
    return (
      <div
        className="App"
        style={{ display: "grid", justifyContent: "center" }}
      >
        <h1>Guess the Word</h1>
        <div>{this.state.gameBoard}</div>

        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "35%",
          }}
        >
          {this.state.keyboard}
        </div>
      </div>
    );
  }
}

export default App;
