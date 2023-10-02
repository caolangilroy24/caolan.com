import React, { useState } from 'react'
import Board from './Board'


export default function Game() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const currentSquares = history[history.length - 1]

   

    function handlePlay(nextSquares) {
        const updatedHistory = [...history, nextSquares]
        console.log(updatedHistory)
        setXIsNext(!xIsNext)
        setHistory(updatedHistory)
    }

    function jumpTo(move){
        const rewriteHistory = history.slice(0, move +1)
        console.log(move)
        console.log('CALLED')
        console.log(rewriteHistory)
        setHistory(rewriteHistory)
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) description = `Go to move #${move}`
        else description = 'Go to game start'
        return (
            <ol key={move}><button onClick={() => jumpTo(move)}>{description}
                </button></ol>
             )
    })

  return (
    <>
        {/* <h1>Tic Tac Toe</h1> */}
        <div className='game'>
            
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
            </div>
            <div className='game-info'>
                {/* <ol>Todo</ol> */}
                {moves}
            </div>
        </div>
    </>
  )
}
