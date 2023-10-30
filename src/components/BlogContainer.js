import React, { useEffect } from 'react'

export default function BlogContainer({blogPosts}) {

    let resultTiles = []
    Object.values(blogPosts).forEach((blog,index)=>{
            resultTiles.push(<div className='result-tile'key={index}>
                        <h1>{blog.title}</h1>
                        <p>{blog.content}</p>
                    </div>)
        })
        
  return (
    <div data-testid='blog-contain' className='blog-contain'>{resultTiles}</div>
  )
}
