import React from 'react'
import Square from "../components/Square"


export default function Board({xIsNext, squares, onPlay}) {

    function handleClick(i) {
        const nextSquares = [...squares];
        let char;
        if(nextSquares[i] || calculateWinner(squares)) return
        if (xIsNext) char = 'X';
        else char = 'O';
        nextSquares[i] = char;
        onPlay(nextSquares)
        
        console.log('clicked')
    }

    const winner = calculateWinner(squares)
    let status;
    if (winner) status = `Winner is ${winner}`
    else status = 'Its your turn, ' + (xIsNext? 'X' : 'O')

  return (
    <div>
        <div data-testid='status' className='status'>{status}!</div>
        <div className="board-row" >
            <Square id="1" value={squares[0]} onSquareclick={() => handleClick(0)}/>
            <Square id="2" value={squares[1]} onSquareclick={() => handleClick(1)}/>
            <Square id="3" value={squares[2]} onSquareclick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
            <Square id="4" value={squares[3]} onSquareclick={() => handleClick(3)}/>
            <Square id="5" value={squares[4]} onSquareclick={() => handleClick(4)}/>
            <Square id="6" value={squares[5]} onSquareclick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
            <Square id="7" value={squares[6]} onSquareclick={() => handleClick(6)}/>
            <Square id="8" value={squares[7]} onSquareclick={() => handleClick(7)}/>
            <Square id="9" value={squares[8]} onSquareclick={() => handleClick(8)}/>
        </div>
    </div>

  )
}

function calculateWinner(squares) {
    const winlines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for (let i = 0; i < winlines.length; i++) {
        const [a,b,c] = winlines[i]
        if ( squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a]
    }
    return null;
}
