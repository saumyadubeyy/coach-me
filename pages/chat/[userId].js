import { Paper } from '@mui/material';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, orderBy, query } from 'firebase/firestore';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Header from '../../components/Chatbox/Header';
import Messages from '../../components/Chatbox/Messages';
import UsersComponent from '../../components/Chatbox/UsersComponent';
import { auth, db } from '../../firebase';
import Navbar from '../../components/Navbar';

const Chat = () => {
  const router = useRouter();
  console.log(router.query.userId);
  const user = auth.currentUser;
  const [users, setUsers] = useState([]);
  const [recieverData, setRecieverData] = useState(null);
  const [allMessages, setAllMessages] = useState([]);  
  const [chatMessage, setChatMessage] = useState("");
  const [queryParam, setQueryParam] = useState();


  useEffect(() => {
	const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
    	setUsers(snapshot.docs.map((doc) => doc.data()));
	});
	return unsub;
  }, []);

  useEffect(() => {
	setQueryParam(router.query.userId);
  }, []);

  useEffect(() => {
	if (recieverData) {
	const unsub = onSnapshot(
		query(
		collection(
			db,
			"users",
			user?.uid,
			"chatUsers",
			recieverData?.userId,
			"messages"
		),
		orderBy("timestamp")
		),
		(snapshot) => {
		setAllMessages(
			snapshot.docs.map((doc) => ({
			id: doc.id,
			messages: doc.data(),
			}))
		);
		}
	);
	return unsub;
	}
}, [recieverData?.userId]);

  const sendMessage = async () => {
    console.log('sending');
	try {
	if (user && recieverData) {
		await addDoc(
		collection(
			db,
			"users",
			user.uid,
			"chatUsers",
			recieverData.userId,
			"messages"
		),
		{
			username: user.displayName,
			messageUserId: user.uid,
			message: chatMessage,
			timestamp: Date.now(),
		}
		);

		await addDoc(
		collection(
			db,
			"users",
			recieverData.userId,
			"chatUsers",
			user.uid,
			"messages"
		),
		{
			username: user.displayName,
			messageUserId: user.uid,
			message: chatMessage,
			timestamp: Date.now(),
		}
		);
	}
	} catch (error) {
	console.log(error);
	}
	setChatMessage("");
};

// console.log(recieverData);


  return (
    <div className='min-h-screen'>
        <Head>
            <title>Chat | Home</title>
        </Head>
		<Navbar />
        <div className=''>
            {/* <Header /> */}
            <div className='flex gap-5 w-[90vw] mt-10 mx-auto h-[80vh]'>
                <Paper className='w-[30%] '>
                    <div>
                        <UsersComponent 
							users={users} 
							setRecieverData={setRecieverData} 
							queryParam={queryParam}
						/>
                    </div>
                </Paper>
                <Paper className='w-[70%]'>
                    <div className='h-full'>
                        <Messages 
                            recieverData={recieverData} 
                            allMessages={allMessages} 
                            chatMessage={chatMessage} 
                            setChatMessage={setChatMessage}  
                            sendMessage={sendMessage}
                        />
                    </div>
                </Paper>
            </div>
        </div>
    </div>
  )
}

export default Chat;