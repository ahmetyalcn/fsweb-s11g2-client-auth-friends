import { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {

    const [form, setForm] = useState({
        username: "workintech",
        password: "wecandoit",
      });
      const {login} = useContext(AuthContext)
    const handleChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        });
      };
    const handleSubmit=(e)=>{
        e.preventDefault()
        login(form)
    }
  return (
    <div>
    <div className="loginFormMainDiv">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>USERNAME</h2>
          <input
            name="username"
            onChange={handleChange}
            value={form.username}
          ></input>
        </div>
        <div>
          <h2>PASSWORD</h2>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          ></input>
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
  )
}

export default Login