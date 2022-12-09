import userContext from "./UserContext";
import { useState,useContext } from "react";

const UserState = (props) => {
    const currUser = {
        "name":"Admin",
        "img" :"https://images7.alphacoders.com/734/734134.jpg"
    }
    const [profilePic,setProfilePic] = useState(currUser.img)
    const updatePic = (url) => {
        setProfilePic(url)
    }
    return (
        <userContext.Provider value={{state,updatePic}}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;