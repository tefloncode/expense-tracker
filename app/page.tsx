import React from 'react'
import { currentUser } from '@clerk/nextjs/server'
import Guest from '@/components/Guest'

const HomePage = async() => {
  const user = await currentUser()
  
  if(!user) {
    return <Guest/>
  }
  return (
    <div>HomePage</div>
  )
}

export default HomePage