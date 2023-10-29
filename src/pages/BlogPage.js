import BlogPost from "../components/BlogPost"
import testBlog from "../test_data/testBlog1.json"

export const BlogPage = () => {
    return(
        <div data-testid='blog'>
            <BlogPost blogPost={testBlog}></BlogPost>
            {/* <h1>Blog pending x</h1>
            <p>I will use this page as a blog once i have the website set up properly</p> */}
        </div>
    )
}