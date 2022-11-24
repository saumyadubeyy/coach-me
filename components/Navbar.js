import { ClickAwayListener } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import downArrow from '../public/assets/downArrow.png';

const Navbar = () => {
  const user = auth.currentUser;
  const router = useRouter();
  const [isOpenEmail, setIsOpenEmail] = useState(false);

  const handleClickAway = () => {
    setIsOpenEmail(false);
  }

  const handleLogout = async () => {
    await auth.signOut();
    router.push('/');
  }

  return (
    <div className='py-3 flex justify-between px-20 bg-gray-100'>

        <div className='flex gap-2 flex-1'>
            {/* <div>Logo</div> */}
            <p className='font-medium'>CoachMe</p>
        </div>
        <div className='flex gap-10 font-medium flex-1 justify-center'>
            <Link href='/'>
              <a>
                <span>Home</span>
              </a>
            </Link>
            <Link href='/faculty'>
              <a className='cursor-pointer'>
                <span>Professors</span>
              </a>
            </Link>
            <Link href='/doubts'>
              <a>
                <span>Doubt Wall</span>
              </a>
            </Link>
        </div>
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className='flex-1 flex justify-end'>
            <div className='cursor-pointer flex items-center gap-1 relative' onClick={() => setIsOpenEmail(!isOpenEmail)}>
              <span>{user?.email}</span>
              <Image src={downArrow} alt='' height={10} width={10} />
            </div>
            {
              isOpenEmail ? 
              <div className='absolute bg-gray-100 right-20 top-[50px] w-[160px] h-[50px] rounded-sm flex items-center justify-center'>
                <p 
                  className='w-full text-center hover:bg-white hover:text-black p-1 m-1 cursor-pointer'
                  onClick={handleLogout}
                >
                  Logout
                </p>
              </div> 
              : null
            }
          </div>
        </ClickAwayListener>
    </div>
  )
}

export default Navbar