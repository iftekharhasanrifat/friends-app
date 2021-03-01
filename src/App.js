import './App.css';
import usersData from './data/data'
import User from './components/User/User';
import { useEffect, useState } from 'react';
import Friend from './components/Friends/Friend';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [users, setUsers] = useState([]);
  const [friends, setFriends] = useState([]);
  useEffect(() => {
    setUsers(usersData);
  }, [])
  const removeDuplicates=data=>data.filter((value,index)=>data.indexOf(value)===index);
  const handleAddFriend = (user) => {
    console.log('added', user);
    const newFriends = [...friends, user];
    setFriends(removeDuplicates(newFriends));
  }
  const totalSalary = friends.reduce((total, user) => total + user.salary, 0)
  return (
    <div className="App">
     <div className="row">
     <div className="user-container col-md-8">
        {
          users.map(user => <User handleAddFriend={handleAddFriend} key={user.login.uuid} user={user}></User>)
        }
      </div>
      <div className="cart col-md-4">
        <h1>Total user : {users.length}</h1>
        {/* {
        console.log(users)
      } */}
        <h2>Friends : {friends.length}</h2>
        <h3>Total Salary : ${totalSalary}</h3>
        <div className="friend-container">
        {
          friends.map(friend => <Friend friend={friend}></Friend>)
        }
        </div>
      </div>
     </div>
    </div>
  );
}

export default App;
