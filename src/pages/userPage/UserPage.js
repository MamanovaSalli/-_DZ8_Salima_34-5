import React from "react";
import {useDispatch, useSelector} from "react-redux";

function UserPage () {
    const dispatch = useDispatch()
    const {value, users} = useSelector(state => state)

    const changeInput = (event) => {
        dispatch({
            type:"INPUT_VALUE",
            payload: event.target.value
        })
    }

    const addUser = () => {
        dispatch({
            type: 'ADD_USER',
            payload: value
        })
    }
 const deleteUser = () => {
        dispatch({
            type: 'DELETE_USER',

        })
    }

    return(

        <>
            <input value={value} onChange={changeInput}/>
            <button onClick={addUser}>Add</button>
            <button onClick={deleteUser}>Delete</button>

            {users && users.map((userName, idx) => <p key={idx}>{userName}</p> )}
        </>
    )
}
export default UserPage