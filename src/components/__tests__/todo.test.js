import {render, screen, cleanup, fireEvent} from '@testing-library/react'
import Todo from '../../Todo'
import Game from '../Game'
import { ToDoListPage } from '../../pages/ToDoListPage'


test('test', () => {
    // render(<Todo/>)
    // const todoElement = screen.getByTestId('todo-1'); // screen retreives a component by using its test id
    // expect(true).toBe(true)
    render(<ToDoListPage/>)
    const inputElement = screen.getByTestId('tdl-in')
    const TDLElement = screen.getByTestId('tdl-page')
    const addElement = screen.getByTestId('tdl-add');
    const tdlElement = screen.getByTestId('tdl');
    expect(inputElement).toBeInTheDocument();
    fireEvent.change(inputElement, {target: {value: 'Finish Tests'}})
    fireEvent.click(addElement)
    fireEvent.change(inputElement, {target: {value: 'Push to Github'}})
    fireEvent.click(addElement)
    expect(tdlElement).toHaveTextContent('Finish Tests')
    expect(tdlElement).toHaveTextContent('Push to Github')


    
    expect(TDLElement).toBeInTheDocument();
})