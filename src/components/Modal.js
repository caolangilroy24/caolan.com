import React, { useState } from 'react'
import styled from 'styled-components'
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import {FaPhone} from 'react-icons/fa'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import {BiLogoGmail} from 'react-icons/bi'
import { click } from '@testing-library/user-event/dist/click';
import ModalWindow from './ModalWindow'


export default function Modal() {
const [modalIsOpen, setModalIsOpen] = useState(false)

const setModalIsOpenToTrue = () => {
    setModalIsOpen(true)
    console.log('Modal click')
    console.log(modalIsOpen)
}

// const onClose = () => {
//     setModalIsOpen(false)
// }

return (
    <>
        <div className='contact-icon'>
        <button className='contact-button' onClick={() => setModalIsOpen(!modalIsOpen )}>Contact Me <FaPhone/></button>
        </div>
        <ModalWindow isOpen={modalIsOpen} onClose={() => setModalIsOpen(!modalIsOpen )}><h2><BiLogoGmail/> caolangilroy@gmail.com<br/><AiFillLinkedin/> <a href='https://www.linkedin.com/in/caolan-gilroy/'>Linkedin</a><br/><AiFillGithub/><a href='https://github.com/caolangilroy24'> Github</a> </h2></ModalWindow>
    </>
    
  )
}
