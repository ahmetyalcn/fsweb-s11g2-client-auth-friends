import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';

const FriendsList = () => {
  const [friends, setFriends] = useState([]);
  const { authInfo } = useContext(AuthContext)

  useEffect(() => {
    console.log(authInfo)
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          Authorization: authInfo.token
        }
      })
      .then(res => setFriends(res.data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <h1>Friends List</h1>
      {friends.map(friend => (
        <div key={friend.id}>
          -{friend.name} - {friend.email}
        </div>
      ))}

    </div>
  )
}

export default FriendsList