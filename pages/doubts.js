import React from 'react'
import DoubtWall from '../components/Doubts/DoubtWall'
import SignIn from '../components/SignIn';
import { auth } from '../firebase'

const doubts = () => {
  const user = auth.currentUser;

  if (user) {
    return <div><DoubtWall /></div>
  } else {
    return <div><SignIn /></div>
  }
}

export default doubts