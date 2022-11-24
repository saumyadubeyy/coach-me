import { Button, TextField } from '@mui/material';
import { createUserWithEmailAndPassword, getAuth, updatePassword } from 'firebase/auth';
import { addDoc, collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { auth, db } from '../firebase';
import lock from '../public/assets/lock.png';

const SignUp = () => {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const userCollectionRef = collection(db, 'users');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username && email && password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            
            // const update = await updatePassword(auth.currentUser, {
            //     displayName: username,
            // });
    
            const user = userCredential.user;

            await setDoc(doc(db, "users", user.uid), {
                displayName: username,
                username: username,
                email: email,
                userId: user.uid,
                timestamp: new Date(),
            });

            console.log(user);
            router.push('/signin');
        } catch (e) {
            alert(e.message);
        }
    } else {
        alert("Please enter all the values");
    }
  }

  useEffect(() => {
    setEmail("");
    setPassword("");
    setUsername('');
  }, [])

  return (
    <div>
        <Head>
            <title>Sign Up | CoachMe</title> 
        </Head>
        <div className='max-w-[500px] mx-auto flex flex-col items-center mt-20'>
            <div className='bg-purple-900 w-[50px] h-[50px] rounded-full flex items-center justify-center p-2 mb-10'>
                <Image src={lock} alt='' width={24} height={24} />
            </div>
            <p className='text-md font-medium mb-10'>Sign Up</p>
            <div className='flex flex-col gap-6 w-full'>
                <TextField 
                    // placeholder='First Name'
                    label='First Name'
                    className='w-full'
                    required
                    autoComplete='given-name'
                    value={username}
                    autoFocus
                    onChange={(e) => setUsername(e.target.value)}
                />
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
                    autoComplete='new-password'
                    value={password}
                    autoFocus
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                    className='bg-green-700 text-white py-3 rounded-md text-md-1 hover:bg-blue-100 hover:text-black hover:shadow-sm font-medium'
                    onClick={(e) => handleSubmit(e)}
                >
                    Sign Up
                </button>
                <Link href='/signin'>
                    <a>
                        <p className='text-center underline text-blue-800'>Already have an account? Sign In</p>
                    </a>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp