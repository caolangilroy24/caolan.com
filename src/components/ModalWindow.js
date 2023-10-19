import React from 'react'

export default function ModalWindow({isOpen, onClose, children}) {
    return(
        <>
        {isOpen?(

            <div className='overlay'>
                <div className='overlay-background' onClick={onClose}>
                    <div className='overlay-container'>

                        <div className='overlay-controls'>
                            <button className='overlay-close' type='button' onClick={onClose}/>
                        </div>
                        <div className='overlay-content'>
                            {children}
                        </div>

                    </div>
                </div>
            </div>

        ):null}
        </>
    )
  
}
