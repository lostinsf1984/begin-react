import React from 'react';
import IsEqual from "react-fast-compare";

function User({props}){
    return(
        <div>
            <b>{props.username}</b>
            <span>({props.email})</span>
        </div>
    )
}
function UserList(){
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@gmail.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@gmail.com'
        }
    ]

    return (
        <div>
            <User props={users[0]}/>
            <User props={users[1]}/>
            <User props={users[2]}/>
        </div>
    );

}

export default React.memo(UserList,IsEqual);