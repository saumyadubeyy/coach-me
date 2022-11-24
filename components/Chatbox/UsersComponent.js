import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { auth } from '../../firebase';
import { randomColors } from '../../utils';
import userIcon from '../../public/assets/user.png';
import Image from 'next/image';

const UsersComponent = ({users, setRecieverData, queryParam}) => {
  const user = auth.currentUser;
  const router = useRouter();
  const [isOpened, setIsOpened] = useState();

  useEffect(() => {
    setIsOpened(router.query.id);
  }, [router.query.id]);

  const handleUserClick = (user) => {
    setRecieverData({
        username: user.username,
        userId: user.userId,
        email: user.email
    })
    router.push({
        pathname: `/chat/${user.userId}`,
        query: {id: user.userId}
    });
  }

  return (
    <div className='h-[79vh] overflow-y-auto'>
        <p className='text-md font-medium p-3'>My friends</p>
        {
            users.map((item, ind) => {
                let color = randomColors();
                console.log(color);
                return (
                    <div 
                        key={ind} 
                        onClick={() => handleUserClick(item)}
                        className='bg-gray-100'
                    >
                        {
                            item.userId != user?.uid ? 
                            <div 
                                className={`my-2 ${isOpened === item.userId ? 'border-2 border-solid border-gray-500' : ''} flex hover:shadow-md  p-2 items-center gap-2`}
                            >
                                {
                                    item ? 
                                    <div className={`bg-purple-800 w-[40px] h-[40px] flex items-center justify-center rounded-full`}>
                                        <Image src={userIcon} alt='' width={30} height={30} />
                                    </div>
                                    : null
                                }
                                <div>
                                    {
                                        item.username ? 
                                        <p className='font-medium'>{item?.username}</p>
                                        : null
                                    }
                                    {
                                        item?.email ? 
                                        <p className='text-gray-500  '>{item?.email}</p>
                                        : null
                                    }
                                </div>
                            </div>
                            : null
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default UsersComponent