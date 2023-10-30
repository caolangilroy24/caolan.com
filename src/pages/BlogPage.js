import BlogPost from "../components/BlogPost"
import testBlog from "../test_data/testBlog1.json"
import BlogContainer from "../components/BlogContainer"
import { useState, useEffect} from "react"
import NewBlog from "../components/NewBlog"

export const BlogPage = () => {
    const [blogPosts, setBlogPosts] = useState([])

    useEffect(()=>{
        const blogPostsFetch = fetch('http://localhost:3000/blogs').then(response => { return response.json()}).then(data =>  {
            const dataArray = Object.values(data)
            setBlogPosts(dataArray)
        },[]);
    }, [])

    function createNewPost (title, body) {
        const newPost = {  
            id: blogPosts.length + 1,
            title: title,
            content: body
        }
        const blogPostsCopy = [...blogPosts]
        blogPostsCopy.push(newPost)
        setBlogPosts(blogPostsCopy)
    }

    return(
        <div data-testid='blog'>
            <BlogPost blogPost={testBlog}></BlogPost>
            <NewBlog createNewPost={createNewPost}/>
            <BlogContainer blogPosts={blogPosts}/>
        </div>
    )
}