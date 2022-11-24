import { Modal, Paper } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import data from '../../data';
import Navbar from '../Navbar';
import Head from 'next/head';
import Link from 'next/link';
// images
import Background from '../../public/assets/bgMaybe.svg'
import mailIcon from '../../public/assets/mail.png'

import * as profsData from '../../final_profs.json';

const Homepage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [item, setItem] = useState();

  console.log('profsData', profsData.length);
  return (
    <div>
      <Head>
        <title>Faculty | Dashboard</title>
      </Head>
        <Navbar />
        <div className='w-[85%] mx-auto py-4'>
          <p className='m-3 my-5 text-md-3 font-semibold'>List of Faculty Members</p>
          <div className='flex flex-wrap'>
            {profsData.map((item, ind) => {
              return (
                <Paper key={ind} className='m-2'>
                  <Link href={`mailto:${item.email}`}>
                    <a>
                      <div 
                      onClick={() => {
                        setIsOpenModal(true);
                        setItem(item);
                      }}
                      className='relative h-full rounded-md p-2 flex gap-4 max-w-[800px] w-[600px] cursor-pointer hover:shadow-md bg-gray-100'
                    >
                      <div className=''>
                        <Image src={item.img} alt='' width={200} height={200} />
                      </div>
                      <div className='w-[600px] flex flex-col gap-2'>
                        <p className='font-medium'>{item.name}</p>
                        <p className='gap-5 text-sm-1 font-medium text-gray-400'>
                          {item.intro}
                        </p>
                        <p className='font-normal text-sm-1'>{item.branch}, DITU</p>
                        <Link href={`mailto:${item.mail}`}>
                          <a className='absolute bottom-3 right-10 flex items-center hover:bg-gray-300 p-1 rounded-full'>
                            <Image src={mailIcon} alt='' width={20} height={20} />
                          </a>
                        </Link>
                      </div>
                      </div>
                    </a>
                  </Link>
                </Paper>
              )
            })}
          </div>
          {/* <div>
            {
              profsData.map((item, ind) => {
                console.log(item);
                return (
                  <div key={ind}>
                    <Paper>
                      <div className=''>
                        {item.name}
                      </div>
                    </Paper>
                  </div>
                )
              })
            }
          </div> */}
        </div>
        {/* <Modal
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          className='outline-0 bg-white w-[800px] h-[630px] m-auto rounded-md shadow-lg'
        >
          <div className='outline-0 w-full h-full bg3 py-10 rounded-md overflow-x-auto modal'>
            {
              item ? 
              <div className='flex flex-col items-start px-20'>
                <p 
                  className='absolute right-5 top-3 cursor-pointer font-semibold text-red-700 text-md'
                  onClick={() => {
                    setIsOpenModal(false);
                    setItem(null)
                  }}
                >
                  x
                </p>
                <Image src={item.image} alt='' width={200} height={200} />
                <div className='pt-10 flex flex-col items-start'>
                  <p className='font-medium text-md'>{item.name}</p>
                  <p className='font-medium text-gray-900'>{item.designation}, {item.branch}</p>
                  <div className='mt-8 flex flex-col gap-2'>
                    {
                      item.specialisation ? 
                      <div className='flex gap-10  w-[600px]'>
                        <span className='w-[180px] font-medium'>Specialisation: </span>
                        <p className='w-[400px]'>{item.specialisation}</p>
                      </div>
                      : null
                    }
                    {
                      item.qualification ?
                      <div className='flex gap-10 w-[600px]'>
                        <span className='w-[180px] font-medium'>Qualification: </span>
                        <p className='w-[400px]'>{item.qualification}</p>
                      </div>
                      : null
                    }
                    {
                      item.researchInterest ? 
                      <div className='flex gap-10 w-[600px]'>
                        <span className='w-[180px] font-medium'>Research Interest: </span>
                        <p className='w-[400px]'>{item.researchInterest}</p>
                      </div>
                      : null
                    }
                  </div>
                </div>

              </div>
              : null
            }
          </div>
        </Modal> */}
    </div>
  )
}

export default Homepage