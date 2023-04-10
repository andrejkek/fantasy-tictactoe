import './Gameboard.css';
import {useState} from "react";


let board = ["","","","","","","","",""]

function setx(x, setX){

}
function checkWin(){
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
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return a;
        }
    }
}
function Gameboard() {

    const [x1,setX1] = useState("");
    const [x2,setX2] = useState("");
    const [x3,setX3] = useState("");
    const [x4,setX4] = useState("");
    const [x5,setX5] = useState("");
    const [x6,setX6] = useState("");
    const [x7,setX7] = useState("");
    const [x8,setX8] = useState("");
    const [x9,setX9] = useState("");
    return (
        <div className={"center flex"}>
            <div className={"margin"}>
                <div className={"row"}>
                    <div onClick={setx(x1, setX1)} className={"cell"}>{x1}</div>
                    <div onClick={() => setX2("x")} className={"cell"}>{x2}</div>
                    <div onClick={() => setX3("x")} className={"cell"}>{x3}</div>
                </div>
                <div className={"row"}>
                    <div className={"cell"}>{x4}</div>
                    <div className={"cell"}>{x5}</div>
                    <div className={"cell"}>{x6}</div>
                </div>
                <div className={"row"}>
                    <div className={"cell"}>{x7}</div>
                    <div className={"cell"}>{x8}</div>
                    <div className={"cell"}>{x9}</div>
                </div>
            </div>
        </div>
    );
}

export default Gameboard;