import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";


const AddFriend = () => {
  const { authInfo } = useContext(AuthContext)
  const [friend, setFriend] = useState({
    name: "",
    email: "",
    age: ""
  });

  const handleChange = (e) => {
    setFriend({
      ...friend,
      [e.target.name]: e.target.value,
    });
  };
  const postData = { ...friend, age: Number(friend.age)};
  const config = {
    method: "post",
    url: "http://localhost:9000/api/friends/",
    headers: {
      Authorization: authInfo.token,
      "Content-Type": "Application/json"
    },
    data:postData
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(authInfo.token)
    axios(config)
    .then(res => setFriend(res.data))
  .catch(err => console.log(err));
  }
return (
  <div>
    <div className="AddFriendFormMainDiv">
      <h1>AddFriend</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Friend Name</h2>
          <input
            name="name"
            onChange={handleChange}
            value={friend.name}
          ></input>
        </div>
        <div>
          <h2>Friend Email</h2>
          <input
            type="email"
            name="email"
            value={friend.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <h2>Age</h2>
          <input
            type="number"
            name="age"
            value={friend.age}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
)
}

export default AddFriend