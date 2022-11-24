import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar';
import { auth, db } from '../../firebase';
import {
    collection,
    getDocs,
    addDoc,
    deleteDoc,
    doc,
    query,
    orderBy,
    Timestamp,
    onSnapshot,
    getDoc
  } from "firebase/firestore";

import userIcon from '../../public/assets/user.png';
import Image from 'next/image';
import deleteIcon from '../../public/assets/delete.png';
import loadingIcon from '../../public/assets/loading.svg';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Divider, Paper } from '@mui/material';

const DoubtWall = () => {
  const router = useRouter();
  
  const user = auth.currentUser;
  // console.log(user);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [postDetails, setPostDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const postCollectionRef = collection(db, "post");
  const usersCollectionRef = collection(db, "users");
  const [chatId, setChatId] = useState();
  const [isReloading, setIsReloading] = useState(false);

  const createPost = async () => {
    // addToArray();
    setLoading(true);
    if (postDetails) {
        await addDoc(postCollectionRef, {
          postDetails: postDetails, 
          created: Date.now(),
          createdBy: user.displayName ? user.displayName : user.email
      });
      setLoading(false)
      setPostDetails('');
      getPosts();
    } else {
        setLoading(false)
        alert('Unable to post an empty message.');
    }
  };

  // console.log('posts', posts);

  const deletePost = async (id) => {
    setLoading(true)
    // console.log('deleting');
    const post = doc(db, "post", id);
    await deleteDoc(post);
    // console.log('deleted');
    setLoading(false)
    getPosts();
  };

  const helpButton = async (id) => {
    setIsReloading(true);
    const postRef = doc(db, "post", id);
    const postData = await getDoc(postRef);
    if (postData.exists()) {
      const email = postData.data().createdBy;
      console.log('email', email);
      
      // const users = await getDocs(usersCollectionRef);
      // console.log('users', users);
      // users.forEach((user) => {
      //   console.log(user.data());
      //   if (email === user.data().email) {
      //     setChatId(user.data().userId);
      //     console.log('helllo?', chatId);
      //   } else {
      //     console.log('user does not exist');
      //   }
      // })

      const usersRef = collection(db, "users");
      const usersData = await getDocs(usersRef);
      if (usersData) {
        // console.log('usersData', usersData.data());
        usersData?.forEach((item) => {
          // console.log('data item', item.data());
          if (item.data().email === email) {
            console.log('founddd ittttttt', item.data());
            setChatId(item.data().userId);
            if (item.data().userId) {
              router.push(`/chat/${item.data().userId}`);
            }
          } 
        })
      } 
      if (chatId) {
        console.log('hello');
        router.push(`/chat/${chatId}`);
      }
      // console.log('doc data', postData.data());
    } else {
      // console.log('no data found');
    }
    setIsReloading(false);
  }

  useEffect(() => {
    setLoading(true)
    setPosts([]);
    addToArray();
    getPosts();
    setLoading(false)
  }, []);

  const getPosts = async () => {      
      const postData = await getDocs(postCollectionRef);
      setPosts(postData.docs.map((doc) => ({...doc.data(), id: doc.id})));
  }

  const addToArray = async () => {
    setLoading(true)
    const q = query(postCollectionRef, orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setPosts(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
    setLoading(false)
  }

  return (
    <div>
        <Head> 
            <title>Doubt Wall | CoachMe</title>
        </Head>
        <Navbar />
        <div className='mt-10 mx-auto flex flex-col items-center gap-2'>
            <textarea 
                placeholder='Have a doubt? Ask people!'
                value={postDetails}
                onChange={(e) => setPostDetails(e.target.value)}
                className='bg-gray-100 w-[600px] outline-0 rounded-md h-[100px] p-5'
            />
            <button 
                className='bg1 font-medium text-white max-w-[200px] w-[200px] text-center p-2 rounded-md '
                onClick={createPost}
            >
                Create Post
            </button>
            {
              loading ?
              <div className='mt-10 flex flex-col items-center'>
                <p className='text-md font-semibold'>Loading</p>
                <Image src={loadingIcon} alt='' width={50} height={50} />
              </div>
              :
              <div className='mt-10 flex items-start gap-20 w-[80%] mx-auto'>
                <Paper className='w-[40%] p-2 py-5 max-h-[60vh] overflow-y-auto'>
                  <p className='my-3 text-md font-semibold px-5'>My Posts</p>
                  {
                    posts.length > 0 ?
                    <div className='p-2 flex flex-col gap-5'>
                      {
                        posts.map((item, ind) => {
                          return (
                            <div key={ind}>
                              {
                                item.createdBy === user.email || user.createdBy === user.displayName ? 
                                <div key={ind} className='w-full border-solid border-2 border-gray-500 rounded-md p-5 flex flex-col gap-4'>
                                  <div className='flex gap-4 items-center relative'>
                                    <div 
                                      className='absolute right-5 flex items-center justify-center p-1 hover:bg-gray-200 rounded-full cursor-pointer'
                                      onClick={() => deletePost(item.id)}
                                    >
                                      <Image src={deleteIcon} alt='' width={22} height={22} />
                                    </div>
                                    <div className='bg-purple-800 w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                                      <Image src={userIcon} alt='' width={30} height={30} />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                      <p className='font-medium'>{item.createdBy}</p>
                                      <p className='text-gray-500 text-sm-1'>{new Date(item?.created).toLocaleDateString(undefined, {
                                        timeZone: 'Asia/Kolkata',
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                        minute: '2-digit',
                                        hour: 'numeric',
                                        hour12: 'true'
                                      })}
                                      </p>
                                    </div>
                                  </div>
                                  <p className=''>{item.postDetails}</p>
                                </div>
                                : null
                              }
                            </div>
                          )
                        })
                      }
                    </div>
                    : null
                  }
                </Paper>
                <Paper className='w-[60%] max-h-[60vh] overflow-y-auto p-2 py-5'>
                  <p className=' my-3 text-md font-semibold px-5'>Friend&apos;s Posts</p>
                  {
                    posts.length > 0 ?
                    <div className='p-2 flex flex-col gap-5'>
                      
                      {
                        posts.map((item, ind) => {
                          // console.log(item);
                          return (
                            <div key={ind}>
                              {
                                item.createdBy === user.email || user.createdBy === user.displayName ? 
                                null :
                                <div key={ind} className='w-full border-solid border-2 border-gray-500 rounded-md p-5 flex flex-col gap-4'>
                                  <div className='flex gap-4 items-center relative'>
                                    <div className='bg-purple-800 w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                                      <Image src={userIcon} alt='' width={30} height={30} />
                                    </div>
                                    <div className='flex flex-col gap-1'>
                                      <p className='font-medium'>{item.createdBy}</p>
                                      <p className='text-gray-500 text-sm-1'>{new Date(item?.created).toLocaleDateString(undefined, {
                                        timeZone: 'Asia/Kolkata',
                                        day: 'numeric',
                                        month: 'short',
                                        year: 'numeric',
                                        minute: '2-digit',
                                        hour: 'numeric',
                                        hour12: 'true'
                                      })}
                                      </p>
                                    </div>
                                  </div>
                                  <p className=''>{item.postDetails}</p>
                                  <button 
                                        onClick={() => helpButton(item.id)}
                                        className='outline-0 w-full bg-purple-800 text-white rounded-md py-2 font-medium '
                                      >
                                        {
                                          isReloading ? 
                                          'Loading...' : 'Help'
                                        }
                                  </button>
                                </div>
                              }
                            </div>
                          )
                        })
                      }
                    </div>
                    : 
                    <p className='text-center font-medium'>No posts available. Please create a new post!</p>
                  }
                </Paper>
              </div>
            }
        </div>
    </div>
  )
}

export default DoubtWall