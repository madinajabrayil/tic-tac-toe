import React,{useState} from 'react';
import Board from '../Board/Board';
import './TicTacToe.css'
import { calculateWinner } from '../index';

const TicTacToe = ()=>{

    const [board,setBoard] = useState(Array(9).fill(null));  // Board State
    const [xIsNext,setxIsNext]= useState(true);
    const winner = calculateWinner(board);       

    const handleClick = (i)=>{
        const boardX = [...board] //board copy

        if(winner || boardX[i]) return;
        boardX[i]= xIsNext ? 'X' : 'O';
        setBoard(boardX);
        setxIsNext(!xIsNext);
    }

    const renderMoves = ()=>{
        return <button className="restart" onClick={()=> setBoard(Array(9).fill(null))}> Restart</button>
    }

  
    return(
        <div>
             {renderMoves()}
             <Board squares={board} onClick={handleClick}/>
             <div className="winner">
                 <p>{winner ? 'Winner is ' +winner +'! :)' :'Next player is '+ (xIsNext ? 'X' : 'O')}</p>
             </div>
        </div>
        
    )
}

export default TicTacToe;