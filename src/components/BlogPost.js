import React from 'react'

export default function BlogPost({blogPost}) {
  const blogTestId = `blogId-${blogPost.id}`
  return (
    <div data-testid={blogTestId}>
        <h1>{blogPost.title}</h1>
        <p>{blogPost.content}</p>
    </div>

  )
}
