import React from 'react'
import Contacts from './home/Contacts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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