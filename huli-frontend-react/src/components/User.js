import {useDeleteUser, useAllUser} from "../hooks/user-hooks";

export default function User({user, onDelete}) {
    
    return (
        <div className="user">
            <div className="user-header">
                <button onClick={() => { onDelete(user) }}>Delete</button>
                
            </div>
            <div>
                <p>Name: {user.name}</p>
                <p>E-mail: {user.email}</p>
                <p>City: {user.city}</p>
            </div>
        </div>
    )
}