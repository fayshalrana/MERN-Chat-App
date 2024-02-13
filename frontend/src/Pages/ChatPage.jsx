import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ChatPage = () => {
const [chats, setChats] = useState([])
  const fetchChats = async () => {
    const {data} = await axios.get("http://localhost:5000/api/chats")
    setChats(data)
  }

  useEffect(()=>{
    fetchChats()
  },[])

  return (

    <div>
      Chats page
    </div>
  )
}

export default ChatPage
