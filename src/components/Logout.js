import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../contexts/AuthContext';

const Logout = () => {
  const { authInfo,logout } = useContext(AuthContext);
  useEffect(() => {
    console.log(authInfo)
    const config = {
      method: "post",
      url: "http://localhost:9000/api/friends/",
      headers: {
        Authorization: authInfo.token,
        "Content-Type": "Application/json"
      },
    }
    axios(config)
      .then(res => logout())
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>Logout</div>
  )
}

export default Logout