import React, { useRef } from 'react'

export default function NewBlog({createNewPost}) {
    const titleInput = useRef(null)
    const bodyInput = useRef(null)

    function handleClick(){
        createNewPost(titleInput.current.value, bodyInput.current.value)
        titleInput.current.value = ''
        bodyInput.current.value = ''
    }


  return (
    <div data-testid='new-blog' className='new-blog-contain'>
        <input data-testid='new-blog-title'ref={titleInput} type='text'></input>
        <textarea data-testid='new-blog-content' ref={bodyInput} placeholder='Start your Blog...'></textarea>
        <button data-testid='new-blog-save' onClick={()=> handleClick()}>Save</button>
    </div>
  )
}
