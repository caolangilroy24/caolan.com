import { screen, render, cleanup, fireEvent } from "@testing-library/react";
import { BlogPage } from "../../pages/BlogPage";

beforeEach(()=> {
    render(<BlogPage/>)
})

afterEach( () => {
    cleanup()
})
test('Should render Blog Page', () => {
    // render(<BlogPage/>)
    const blogPost = screen.getByTestId('blog')
    console.log('Test')
    expect(blogPost).toBeInTheDocument();
})

test('Should render default blog posts', () => {
    // render(<BlogPage/>)
    const blogContain = screen.getByTestId('blog-contain')
    const firstBlog = screen.getByTestId('blogId-1')
    console.log('Test')
    expect(blogContain).toBeInTheDocument();
    expect(firstBlog).toBeInTheDocument();
    expect(firstBlog).toHaveTextContent('My First Blog Post')
})

test('Should render default blog posts', () => {
    const titleElement = screen.getByTestId('new-blog-title')
    const contentElement = screen.getByTestId('new-blog-content')
    const saveElement = screen.getByTestId('new-blog-save')

    fireEvent.change(titleElement, 'Test Blog')
    fireEvent.change(contentElement, 'This is my first Test Blog')
    fireEvent.click(saveElement)

    const firstTestBlog = screen.getByTestId('blogId-4') // I know the id is 5 because of my hardcoded backend, Fix this
    expect(firstTestBlog).toBeInTheDocument();
    expect(firstTestBlog).toHaveTextContent('Test Blog')
    expect(firstTestBlog).toHaveTextContent('This is my first Test Blog')

    


})