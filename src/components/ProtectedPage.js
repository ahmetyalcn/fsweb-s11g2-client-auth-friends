import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { Redirect, useLocation } from "react-router-dom";

const ProtectedPage = ({ children, ...rest }) => {
    const { isLoggedIn } = useContext(AuthContext)
    const location = useLocation();
    console.log(isLoggedIn)
    return (
        <div>
            {
            isLoggedIn ?
            (
                children
            ):(
            <Redirect to={{
                pathname: "/login",
                state: { referrer: location.pathname }
            }}
            />
            )
                 
}

        </div>
    )
}
    export default ProtectedPage