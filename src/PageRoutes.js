import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { BlogPage } from './pages/BlogPage'
import { BlogPostPage } from './pages/BlogPostPage'
import { HomePage } from './pages/HomePage'
import { TicTacToePage } from './pages/TicTacToePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { ToDoListPage } from './pages/ToDoListPage'

export const PageRoutes = () => {
    // first we wrap all of it inside our browser router component, this is what provides the current route inside the users 
    // browser to our route components and allows them to display or not display accordingly 
    //inside here we have a switch which makes sure only one route is displayed at a time, 
    // inside there we display our routes 

    //If i wanted to show a certain blog post id need to give the url parameter also like path="blog/:postId"
    return (
        <Router> 
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/blog/:blogId" element={<BlogPostPage/>}/>
                <Route path="/blog" element={<BlogPage/>}/>
                <Route path="/tictac" element={<TicTacToePage/>}/>
                <Route path="/todolist" element={<ToDoListPage/>}/>
                <Route element={<NotFoundPage/>}/>
            </Routes>
        </Router>
    )

}