import {useState} from "react";

let con = 1;
let won = 0;
let moves = 0;
let board = ["", "", "", "", "", "", "", "", ""]
const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function ai() {
    //win con?
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] == "o" && ((board[a] === board[b] && board[a] != board[c]) || (board[a] === board[c] && board[a] != board[b]))) {
            if (board[b] == "") {
                board[b] = "o";
                moves += 1;
                return b;
            } else if (board[c] == "") {
                board[c] = "o";
                moves += 1;
                return c;
            }
        } else if (board[b] == "o" && (board[b] == board[c])) {
            if (board[a] == "") {
                board[a] = "o";
                moves += 1;
                return a;
            }
        }
    }
    //don't allow win
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] == "x" && ((board[a] == board[b] && board[a] != board[c]) || (board[a] == board[c] && board[a] != board[b]))) {
            if (board[b] == "") {
                board[b] = "o";
                moves += 1;
                return b;
            } else if (board[c] == "") {
                board[c] = "o";
                moves += 1;
                return c;
            }
        } else if (board[b] == "x" && (board[b] == board[c])) {
            if (board[a] == "") {
                board[a] = "o";
                moves += 1;
                return a;
            }
        }
    }
    //potential win
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] == "o" && board[b] == "" && board[c] == "") {
            let random = Math.floor(Math.random() * 2);
            if (random == 0) {
                if (board[b] == "") {
                    board[b] = "o";
                    moves += 1;
                    return b;
                }
            } else {
                if (board[c] == "") {
                    board[c] = "o";
                    moves += 1;
                    return c;
                }
            }
        } else if (board[c] == "o" && board[b] == "" && board[a] == "") {
            let random = Math.floor(Math.random() * 2);
            if (random == 0) {
                if (board[b] == "") {
                    board[b] = "o";
                    moves += 1;
                    return b;
                }
            } else {
                if (board[a] == "") {
                    board[a] = "o";
                    moves += 1;
                    return a;
                }
            }
        } else if (board[b] == "o" && board[a] == "" && board[c] == "") {
            let random = Math.floor(Math.random() * 2);
            if (random == 0) {
                if (board[c] == "") {
                    board[c] = "o";
                    moves += 1;
                    return c;
                }
            } else {
                if (board[a] == "") {
                    board[a] = "o";
                    moves += 1;
                    return a;
                }
            }
        }
    }
    //random move
    for (let i = 0; i < 1000; i++) {
        let random = Math.floor(Math.random() * 9);
        if (board[random] == "") {
            board[random] = "o";
            moves += 1;
            return random;
        }
    }
}

function updateMatrix(x) {
    if (board[x - 1] != "") return 0;
    board[x - 1] = "x";
    moves += 1;
    return 1;
}

function test() {
    console.log(board);
}

function checkWin() {
    console.log("moves=" + moves);
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] != "" && board[a] == board[b] && board[a] == board[c]) {
            console.log(board[a] + " wins!")
            won = board[a];
            console.log("won is " + won);
            return 1;
        } else if (moves == 9) {
            won = "draw";
            console.log("draw");
            return 1;
        }
    }
    return 0;
}

function Gameboard() {
    const [x1, setX1] = useState("");
    const [x2, setX2] = useState("");
    const [x3, setX3] = useState("");
    const [x4, setX4] = useState("");
    const [x5, setX5] = useState("");
    const [x6, setX6] = useState("");
    const [x7, setX7] = useState("");
    const [x8, setX8] = useState("");
    const [x9, setX9] = useState("");

    return (
        <div>
            <div className={"center flex"}>
                <div className={"margin"}>
                    <div className={"row"}>
                        <div onClick={() => {
                            if (won == 0) {
                                let check = updateMatrix(1);
                                if (check != 0) {
                                    if (board[0] == "x") setX1("x");
                                    con = checkWin();
                                    if (con != 1) {
                                        let oks = ai();
                                        if (oks == 1) setX2("o");
                                        else if (oks == 2) setX3("o");
                                        else if (oks == 3) setX4("o");
                                        else if (oks == 4) setX5("o");
                                        else if (oks == 5) setX6("o");
                                        else if (oks == 6) setX7("o");
                                        else if (oks == 7) setX8("o");
                                        else if (oks == 8) setX9("o");
                                        checkWin();
                                        console.log(board);
                                    }
                                }
                            }
                        }} className={"cell"}>{x1}</div>


                        <div onClick={() => {
                            if (won == 0) {
                                let check = updateMatrix(2);
                                if (check != 0) {
                                    if (board[1] == "x") setX2("x");
                                    con = checkWin();
                                    if (con != 1) {
                                        let oks = ai();
                                        if (oks == 0) setX1("o");
                                        else if (oks == 2) setX3("o");
                                        else if (oks == 3) setX4("o");
                                        else if (oks == 4) setX5("o");
                                        else if (oks == 5) setX6("o");
                                        else if (oks == 6) setX7("o");
                                        else if (oks == 7) setX8("o");
                                        else if (oks == 8) setX9("o");
                                        checkWin();
                                        console.log(board);
                                    }
                                }
                            }
                        }} className={"cell"}>{x2}</div>


                        <div onClick={() => {
                            if (won == 0) {
                                let check = updateMatrix(3);
                                if (check != 0) {
                                    if (board[2] == "x") setX3("x");
                                    con = checkWin();
                                    if (con != 1) {
                                        let oks = ai();
                                        if (oks == 0) setX1("o");
                                        else if (oks == 1) setX2("o");
                                        else if (oks == 3) setX4("o");
                                        else if (oks == 4) setX5("o");
                                        else if (oks == 5) setX6("o");
                                        else if (oks == 6) setX7("o");
                                        else if (oks == 7) setX8("o");
                                        else if (oks == 8) setX9("o");
                                        checkWin();
                                        console.log(board);
                                    }
                                }
                            }
                        }} className={"cell"}>{x3}</div>


                    </div>

                    <div className={"row"}>
                        <div onClick={() => {
                            if (won == 0) {
                                let check = updateMatrix(4);
                                if (check != 0) {
                                    if (board[3] == "x") setX4("x");
                                    con = checkWin();
                                    if (con != 1) {
                                        let oks = ai();
                                        if (oks == 0) setX1("o");
                                        else if (oks == 1) setX2("o");
                                        else if (oks == 2) setX3("o");
                                        else if (oks == 4) setX5("o");
                                        else if (oks == 5) setX6("o");
                                        else if (oks == 6) setX7("o");
                                        else if (oks == 7) setX8("o");
                                        else if (oks == 8) setX9("o");
                                        checkWin();
                                        console.log(board);
                                    }
                                }
                            }
                        }} className={"cell"}>{x4}</div>


                        <div onClick={() => {
                            if (won == 0) {
                                let check = updateMatrix(5);
                                if (check != 0) {
                                    if (board[4] == "x") setX5("x");
                                    con = checkWin();
                                    if (con != 1) {
                                        let oks = ai();
                                        if (oks == 0) setX1("o");
                                        else if (oks == 1) setX2("o");
                                        else if (oks == 2) setX3("o");
                                        else if (oks == 3) setX4("o");
                                        else if (oks == 5) setX6("o");
                                        else if (oks == 6) setX7("o");
                                        else if (oks == 7) setX8("o");
                                        else if (oks == 8) setX9("o");
                                        checkWin();
                                        console.log(board);
                                    }
                                }
                            }
                        }} className={"cell"}>{x5}</div>


                        <div onClick={() => {
                            if (won == 0) {
                                let check = updateMatrix(6);
                                if (check != 0) {
                                    if (board[5] == "x") setX6("x");
                                    con = checkWin();
                                    if (con != 1) {
                                        let oks = ai();
                                        if (oks == 0) setX1("o");
                                        else if (oks == 1) setX2("o");
                                        else if (oks == 2) setX3("o");
                                        else if (oks == 3) setX4("o");
                                        else if (oks == 4) setX5("o");
                                        else if (oks == 6) setX7("o");
                                        else if (oks == 7) setX8("o");
                                        else if (oks == 8) setX9("o");
                                        checkWin();
                                        console.log(board);
                                    }
                                }
                            }
                        }} className={"cell"}>{x6}</div>


                    </div>

                    <div className={"row"}>
                        <div onClick={() => {
                            if (won == 0) {
                                let check = updateMatrix(7);
                                if (check != 0) {
                                    if (board[6] == "x") setX7("x");
                                    con = checkWin();
                                    if (con != 1) {
                                        let oks = ai();
                                        if (oks == 0) setX1("o");
                                        else if (oks == 1) setX2("o");
                                        else if (oks == 2) setX3("o");
                                        else if (oks == 3) setX4("o");
                                        else if (oks == 4) setX5("o");
                                        else if (oks == 5) setX6("o");
                                        else if (oks == 7) setX8("o");
                                        else if (oks == 8) setX9("o");
                                        checkWin();
                                        console.log(board);
                                    }
                                }
                            }
                        }} className={"cell"}>{x7}</div>


                        <div onClick={() => {
                            if (won == 0) {
                                let check = updateMatrix(8);
                                if (check != 0) {
                                    if (board[7] == "x") setX8("x");
                                    con = checkWin();
                                    if (con != 1) {
                                        let oks = ai();
                                        if (oks == 0) setX1("o");
                                        else if (oks == 1) setX2("o");
                                        else if (oks == 2) setX3("o");
                                        else if (oks == 3) setX4("o");
                                        else if (oks == 4) setX5("o");
                                        else if (oks == 5) setX6("o");
                                        else if (oks == 6) setX7("o");
                                        else if (oks == 8) setX9("o");
                                        checkWin();
                                        console.log(board);
                                    }
                                }
                            }
                        }} className={"cell"}>{x8}</div>


                        <div onClick={() => {
                            if (won == 0) {
                                let check = updateMatrix(9);
                                if (check != 0) {
                                    if (board[8] == "x") setX9("x");
                                    con = checkWin();
                                    if (con != 1) {
                                        let oks = ai();
                                        if (oks == 0) setX1("o");
                                        else if (oks == 1) setX2("o");
                                        else if (oks == 2) setX3("o");
                                        else if (oks == 3) setX4("o");
                                        else if (oks == 4) setX5("o");
                                        else if (oks == 5) setX6("o");
                                        else if (oks == 6) setX7("o");
                                        else if (oks == 7) setX8("o");
                                        checkWin();
                                        console.log(board);
                                    }
                                }
                            }
                        }} className={"cell"}>{x9}</div>
                    </div>
                </div>
            </div>
            <div className={"test center"}>results:</div>
        </div>
    );
}

export default Gameboard;