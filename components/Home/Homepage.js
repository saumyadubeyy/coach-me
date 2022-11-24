import { Modal } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'
import Navbar from '../Navbar'
import Link from 'next/link'
// images
import Background from '../../public/assets/bgMaybe.svg'
import doubtWall from '../../public/assets/doubtWall.png';
import faculty from '../../public/assets/faculty.png';
import chat from '../../public/assets/chat.png';
import a1 from '../../public/assets/a1.svg';
import Footer from '../Footer'

const Homepage = () => {  
  return (
    <div className=''>
        <Navbar />
        <div className='flex items-center justify-center mt-5'>
          <Image src={a1} alt='' width={900} height={500} />
        </div>
        <p className='text-heading font-semibold text-center pt-5'>Connect with Mentors</p>
        <p className='text-black pt-2 text-md text-center font-medium'>Connect with over 100 mentors of different fields and seek guidance from the perfect match!</p>
        {/* <p className='text-black font-semibold text-center mt-10 mb-10 text-md'>What do you want to do?</p> */}
        <div className='flex gap-16 justify-center items-start my-10 h-[25vh]'>
          <Link href='/doubts'>
            <a>
              <div className='bg1 hover:shadow-lg hover:h-[205px] hover:cursor-pointer w-[230px] h-[200px] flex flex-col gap-8 justify-center items-center rounded-md text-white'>
                <Image src={doubtWall} alt='' width={64} height={64} />
                <p className='text-md-1 font-medium'>Doubts wall</p>
              </div>
            </a>
          </Link>
          <Link href='/faculty'>
            <a>
              <div className='bg2 hover:shadow-lg hover:h-[205px] hover:cursor-pointer w-[230px] h-[200px] flex flex-col gap-8 justify-center items-center rounded-md text-white'>
                <Image src={faculty} alt='' width={64} height={64} />
                <p className='text-md-1 font-medium'>List of Professors</p>
              </div>
            </a>
          </Link>
          <Link href='/chat/LdgZxWeg9gcnRHDPqeNB3CLfK0S2'>
            <a>
              <div className='bg1 hover:shadow-lg hover:h-[205px] hover:cursor-pointer w-[230px] h-[200px] flex flex-col gap-8 justify-center items-center rounded-md text-white'>
                <Image src={chat} alt='' width={64} height={64} />
                <p className='text-md-1 font-medium'>Chat</p>
              </div>
            </a>
          </Link>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage