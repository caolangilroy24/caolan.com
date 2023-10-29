import {render, screen, cleanup, fireEvent } from '@testing-library/react'
import Game from '../Game'
// import Board from '../Board';
import { toHaveTextContent } from '@testing-library/jest-dom/matchers';

afterEach(()=>{
    cleanup();
})

test('Should render game component', () => {
    render(<Game/>);
    const gameElement = screen.getByTestId('game');
    expect(gameElement).toBeInTheDocument()
})

test('Should make first move, render X on the borad and prompt next player', () => {
    render(<Game/>);
    // render(<Board/>)
    const gameElement = screen.getByTestId('game');
    const boardElement = screen.getByTestId('board');
    const infoElement = screen.getByTestId('info')
    const box1Element = screen.getByTestId('1')
    // const box2Element = screen.getByTestId('2')
    // const box3Element = screen.getByTestId('3')
    // const box4Element = screen.getByTestId('4')
    // const box5Element = screen.getByTestId('5')
    // const box6Element = screen.getByTestId('6')
    // const box7Element = screen.getByTestId('7')
    // const box8Element = screen.getByTestId('8')
    // const box9Element = screen.getByTestId('9')
    fireEvent.click(box1Element)
    // box1Element.getBy
    // const val = box1Element
    const statElement = screen.getByTestId('status')
    
    expect(true).toBe(true)
    // expect(box1Element).toContainHTML("<button className='square' data-testid='1'>X</button>")
    expect(box1Element).toHaveTextContent('X')
    expect(statElement).toHaveTextContent('Its your turn, O!')
    expect(gameElement).toBeInTheDocument()
    expect(boardElement).toBeInTheDocument()
    expect(infoElement).toBeInTheDocument()
    expect(boardElement).toBeInTheDocument()
    expect(box1Element).toBeInTheDocument()
    // expect(gameElement).toHaveTextContent('Hi')
    // expect(gameElement).

})

test('Should register x is the winner', () => {
    render(<Game/>);
    // render(<Board/>)
    const gameElement = screen.getByTestId('game');
    const boardElement = screen.getByTestId('board');
    const infoElement = screen.getByTestId('info')
    const box1Element = screen.getByTestId('1')
    // const box2Element = screen.getByTestId('2')
    const box3Element = screen.getByTestId('3')
    const box4Element = screen.getByTestId('4')
    const box5Element = screen.getByTestId('5')
    const box6Element = screen.getByTestId('6')
    const box7Element = screen.getByTestId('7')
    const box8Element = screen.getByTestId('8')
    const box9Element = screen.getByTestId('9')
    const statElement = screen.getByTestId('status')

    fireEvent.click(box1Element) // x1          o1
    fireEvent.click(box3Element)//   o4   o5
    fireEvent.click(box9Element)//  x7          x9
    fireEvent.click(box5Element)
    fireEvent.click(box7Element)
    fireEvent.click(box4Element)
    fireEvent.click(box8Element)

    // box1Element.getBy
    // const val = box1Element
    
    expect(true).toBe(true)
    // expect(box1Element).toContainHTML("<button className='square' data-testid='1'>X</button>")
    expect(box1Element).toHaveTextContent('X')
    expect(gameElement).toBeInTheDocument()
    expect(boardElement).toBeInTheDocument()
    expect(infoElement).toBeInTheDocument()
    expect(boardElement).toBeInTheDocument()
    expect(box1Element).toBeInTheDocument()
    expect(box3Element).toHaveTextContent('O')
    expect(statElement).toHaveTextContent('Winner is X!')

    // expect(gameElement).toHaveTextContent('Hi')
    // expect(gameElement).

})