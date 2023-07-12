import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <h1>Friends Database</h1>
        <Link to="/login">
            <button>Friends List</button>
        </Link>
        <Link to="/friends">
            <button>Friends List</button>
        </Link>
        <Link to="/friends_add">
            <button>Add Friend</button>
        </Link>
        <Link to="/logout">
            <button>Logout</button>
        </Link>
    </div>
  )
}

export default Header