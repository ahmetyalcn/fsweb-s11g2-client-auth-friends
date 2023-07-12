import { Route,Switch } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import AddFriend from './components/AddFriend';
import FriendsList from './components/FriendsList';
import Logout from './components/Logout';
import Header from './components/Header';
import AuthProvider from './contexts/AuthContext';
import ProtectedPage from "./components/ProtectedPage"
function App() {
  return (
   <AuthProvider>
    <div className="App">
      <Header/>
      <Switch>
        <Route path="/login" component={Login} />
        <ProtectedPage path="/friends">
          <FriendsList />
        </ProtectedPage>
        <ProtectedPage path="/friends_add">
          <AddFriend />
        </ProtectedPage>
        <ProtectedPage path="/logout">
          <Logout />
        </ProtectedPage>
      </Switch>
    </div>
    </AuthProvider>
  );
}

export default App;
