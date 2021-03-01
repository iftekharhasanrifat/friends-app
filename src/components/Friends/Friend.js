import React from 'react';
import './Friend.css'
const Friend = (props) => {
    const friend = props.friend; 
    const name = friend.name.title+" "+friend.name.first+" "+friend.name.last;
    return (
        <div className="friend">
            <img src={friend.picture.large} alt="" />
            <h4>{name}</h4>
            <p>{friend.email}</p>
            <h5>Salary : ${friend.salary}</h5>
        </div>
    );
};

export default Friend;