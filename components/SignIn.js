import { TextField } from '@mui/material';
import { signInWithEmailAndPassword } from 'firebase/auth';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import lock from '../public/assets/lock.png';

const SignIn = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          // signed In
          const user = userCredential.user;
          router.push('/')
      })
      .catch((e) => {
          alert(e.message);
      })
    };

    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //         set
    //     })
    // }, [])
  
    return (
      <div>
          <Head>
              <title>Sign In | CoachMe</title> 
          </Head>
          <div className='max-w-[500px] mx-auto flex flex-col items-center mt-20'>
              <div className='bg-purple-900 w-[50px] h-[50px] rounded-full flex items-center justify-center p-2 mb-10'>
                  <Image src={lock} alt='' width={24} height={24} />
              </div>
              <p className='text-md font-medium mb-10'>Sign In</p>
              <div className='flex flex-col gap-6 w-full'>
                  <TextField
                      // placeholder='First Name'
                      label='Email'
                      className='w-full'
                      required
                      value={email}
                      autoFocus
                      autoComplete='email'
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField 
                      // placeholder='First Name'
                      label='Password'
                      type="password"
                      className='w-full'
                      required
                      autoComplete='current-password'
                      value={password}
                      autoFocus
                      onChange={(e) => setPassword(e.target.value)}
                      
                  />
                  <button 
                      className='bg-green-700 text-white py-3 rounded-md text-md-1 hover:bg-blue-100 hover:text-black hover:shadow-sm font-medium'
                      onClick={(e) => handleSubmit(e)}
                  >
                      Sign In
                  </button>
                  <Link href='/signup'>
                      <a>
                          <p className='text-center underline text-blue-800'>Don&apos;t have an account? Sign Up</p>
                      </a>
                  </Link>
              </div>
          </div>
      </div>
    )
}

export default SignIn