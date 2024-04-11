import axios from "axios";
import { useEffect } from "react";
import { createContext, useReducer } from "react";
import UserReducer from "./userReducer";
import { useContext } from "react";

const UserContext = createContext();

const guest = {
  _id: "",
  username: "",
  email:"",
  photo:"",
  loginStatus: false,
  loading:false,
  isAdmin:false,
  generated: [],
  favourites:[],
};


const UserProvider = ({ children }) => {
  const [userState, updateUserState] = useReducer(UserReducer, guest);

  const getUser=async ()=>{
    let token=localStorage.getItem('token');
    token="Bearer "+token;
    const response = await axios.get("", {
      headers: {
        Authorization: token,
      },
    });
    console.log(response,userState.loginStatus);
    if (response.status === 200) {
      const userData = response.userData;
      updateUserState({
        type: "loginStatus",
        payload: true,
      });
      updateUserState({
        type: "_id",
        payload: userData._id,
      });
      updateUserState({
        type: "username",
        payload: userData.username,
      });
      updateUserState({
        type: "email",
        payload: userData.email,
      });
      updateUserState({
        type: "photo",
        payload: userData.photo,
      });
      updateUserState({
        type: "isAdmin",
        payload: userData.isAdmin,
      });
      updateUserState({
        type: "generated",
        payload: userData.generated,
      });
      updateUserState({
        type: "favourites",
        payload: userData.favourites,
      });
    }
    else{
      alert("some error occured");
    }
    console.log("after if",userState.loginStatus);
  }

  

  return (
    <UserContext.Provider value={{ ...userState, updateUserState, getUser }}>
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  return useContext(UserContext);
};

export { UserProvider, UserContext, useUserContext };
