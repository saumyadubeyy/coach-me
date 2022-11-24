import { Divider } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react'
import { auth } from '../../firebase';
import userIcon from '../../public/assets/user.png'
import rightIcon from '../../public/assets/right.png';

const Messages = ({recieverData, allMessages, chatMessage, setChatMessage, sendMessage}) => {
  const user = auth.currentUser;
  console.log(user);
//   console.log(allMessages);

  const handleSend = (e) => {
    if (chatMessage) {
        sendMessage();
    } else {
        alert('Message box is empty!');
    }
  };

  return (
    <div className='flex flex-col gap-1 h-[80vh] justify-between'>
        <Head>
            <title>CoachMe | Chat</title>
        </Head>
        {
            recieverData ? 
            <div
                className='flex flex-col gap-1 h-[80vh] justify-between'
            >
                <div className='p-2 h-[10%] flex gap-3 items-center'>
                    <div className='bg-purple-800 w-[40px] h-[40px] flex items-center justify-center rounded-full'>
                        <Image src={userIcon} alt='' width={30} height={30} />
                    </div>
                    <div className='flex flex-col'>
                        <span className='font-medium'>{recieverData?.username}</span>
                        <span className='text-gray-500'>{recieverData?.email}</span>
                    </div>
                </div>
                <Divider />
                <div className='overflow-y-auto h-[80%] py-10'>
                    {
                        allMessages ? 
                        allMessages.map((item, id) => {
                            console.log(item);
                            return(
                                <div 
                                    key={id}
                                    className=
                                    {`
                                        my-2 
                                        px-3
                                        ${user.uid === item.messages.messageUserId ? 'text-pink-500' : 'text-blue-600'}
                                        ${user.uid === item.messages.messageUserId ? 'text-right' : 'text-left'}
                                        
                                    `}
                                >
                                    {item.messages.message}
                                    {/* {item.messages.timestamp} */}
                                    <p className='text-gray-500 text-sm-1'>{new Date(item?.messages?.timestamp).toLocaleTimeString(undefined, {
                                        timeZone: 'Asia/Kolkata',
                                        minute: '2-digit',
                                        hour: 'numeric',
                                        hour12: 'true'
                                    })}
                                    </p>
                                </div>
                            )
                        })
                        : null
                    }
                </div>
                {/* <Divider /> */}
                <div className='flex items-start h-[10%] border-t-[1px] border-solid border-gray-200'>
                    <input
                        placeholder='Type message'
                        value={chatMessage}
                        onChange={(e) => setChatMessage(e.target.value)}
                        className='outline-0 w-[80%] py-2 h-full px-6'
                    />
                    <button 
                        className='bg-purple-800 text-white font-semibold outline-0 w-[20%] py-2 h-full flex items-center justify-center gap-1'
                        onClick={handleSend}
                    >
                        <span>Send</span>
                        <Image src={rightIcon} alt='' width={15} height={15} />
                    </button>
                </div>
            </div>
            : <p className='py-20 px-10 font-medium'>Select a user to start conversation or view previous conversations.</p>
        }

    </div>
  )
}

export default Messages