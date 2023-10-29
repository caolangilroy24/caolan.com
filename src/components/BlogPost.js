import React from 'react'

export default function BlogPost({blogPost}) {
  return (
    <div>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.content}</p>
    </div>

  )
}
