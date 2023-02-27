import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchUserDetails=(email)=>{
    return axios.get(`http://localhost:4000/users/${email}`)
}
const fetchUserCousese=(id)=>{
    return axios.get(`http://localhost:4000/channels/${id}`)
}
function DepedentQueries({email}) {
const {data :user}=useQuery("user",()=>fetchUserDetails(email));
const channelId=user?.data.channelId;
useQuery("cousrse",()=>fetchUserCousese(channelId),{
    enabled:!!channelId 
})
//!! converts the value to boolean
  return (
    <div>DepedentQueries</div>
  )
}

export default DepedentQueries