import React from 'react'
import { auth } from '../../firebase'

const Header = () => {
  const user = auth.currentUser;

  const logout = () => {
    auth.signOut();
  }

  return (
    <div className='bg-red-50 py-3 flex gap-10 justify-end px-20'>
        <p>{user?.email}</p>
        <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Header