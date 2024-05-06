import React from 'react'
import Contacts from './home/Contacts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from "../../public/images/7841103.jpg";
import {faFacebook, faInstagram, faPhone} from '../utils/icons'
const Footer = () => {
  return (
    <div className='bg-action text-primary h-1/3 flex justify-between py-8 px-4'>
      <div>
      <div className='flex gap-4 '>
      <FontAwesomeIcon icon={faPhone} />
      <p>+30 2754 041580</p>
      </div>
      <p className='text-sm'>Epar.Od. Ermionis - Galatas, Thermisia 210 51, Grecia</p>
      <div  className='flex gap-4 items-center pt-4'>
      <img src={logo} alt="logo" className="w-[15%] rounded-full" />
      <h1>Minimarket Anastasia</h1>
      </div>

      </div>
      
      <div className='flex flex-col gap-4 pr-4'>
        <div className='flex gap-2 items-center'>
        <FontAwesomeIcon icon={faFacebook} style={{scale: '150%'}} />
      <p>Facebook</p>
        </div>

        <div className='flex gap-2 items-center'>
        <FontAwesomeIcon icon={faInstagram} style={{scale: '150%'}} />
      <p>Instagram</p>
        </div>
      </div>
    </div>
  )
}

export default Footer