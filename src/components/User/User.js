import React from 'react';
import './User.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
const User = (props) => {
    const user = props.user;
    const handleAddFriend = props.handleAddFriend;
    const name = user.name.title + " " + user.name.first + " " + user.name.last;
    return (
        <div className="user bg-info">
            <img src={user.picture.large} alt=""/>
            <h4>{name}</h4>
            <p>{user.email}</p>
            <h5>Salary : ${user.salary}</h5>
            <button className="btn btn-primary"onClick={()=>handleAddFriend(user)}>Add Friend</button>
        </div>
        // <div className="card" style={{width:"18rem"}}>
        //         <img src={user.picture.large} className="card-img-top" alt="..."/>
        //         <div className="card-body">
        //             <h5 className="card-title">{name}</h5>
        //             <p className="card-text">{user.email}</p>
        //             <p className="card-text">${user.salary}</p>
        //             <button className="btn btn-primary"onClick={()=>handleAddFriend(user)}>Add Friend</button>
        //         </div>
        // </div>
    );
};

export default User;