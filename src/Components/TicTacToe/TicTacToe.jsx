import "../TicTacToe/TicTacToe.css";
import circle from "../../assets/circle.png";
import cross from "../../assets/cross.png";
import { useState, useRef } from "react";

let data = ["", "", "", "", "", "", "", "", ""];

function TicTacToe() {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);
  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }
    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross}'>`;
      data[num] = "x";
      setCount(++count);
    } else {
      e.target.innerHTML = `<img src='${circle}'>`;
      data[num] = "o";
      setCount(++count);
    }
    checkWin();
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (!data.includes("")) {
      titleRef.current.innerHTML = `It's a Draw!`;
      setLock(true);
    }
  };
  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations:  <img src=${cross}> wins`;
    } else {
      titleRef.current.innerHTML = `Congratulations:  <img src=${circle}> wins`;
    }
  };
  const reset = () => {
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => {
      box.innerHTML = "";
    });
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML = "Tic Tac Toe In <span>React</span>";
  };
  return (
    <div>
      <div className="container">
        <h1 className="title" ref={titleRef}>
          Tic Tac Toe Game In <span>React</span>
        </h1>
        <div className="board">
          <div className="row1">
            <div
              className="boxes
                "
              onClick={(e) => {
                toggle(e, 0);
              }}
            ></div>
            <div
              className="boxes
                "
              onClick={(e) => {
                toggle(e, 1);
              }}
            ></div>
            <div
              className="boxes
                "
              onClick={(e) => {
                toggle(e, 2);
              }}
            ></div>
          </div>
          <div className="row2">
            <div
              className="boxes
                "
              onClick={(e) => {
                toggle(e, 3);
              }}
            ></div>
            <div
              className="boxes
                "
              onClick={(e) => {
                toggle(e, 4);
              }}
            ></div>
            <div
              className="boxes
                "
              onClick={(e) => {
                toggle(e, 5);
              }}
            ></div>
          </div>
          <div className="row3">
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 6);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 7);
              }}
            ></div>
            <div
              className="boxes"
              onClick={(e) => {
                toggle(e, 8);
              }}
            ></div>
          </div>
        </div>
        <button className="reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default TicTacToe;
