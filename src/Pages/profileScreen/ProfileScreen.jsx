import React from "react";
import "./profileScreen.css";
import Navbar from "../../Components/navbar/Navbar";
import { useSelector } from "react-redux";
import { auth, signOut } from "../../firebase";

const ProfileScreen = () => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  return (
    <div className="profileScreen">
      <Navbar />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://media.tenor.com/sgQ73oidu1wAAAAC/netflix-avatar-smile.gif"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user?.email}</h2>
            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <button
                className="profileScreen__signOut"
                onClick={() => signOut(auth)}
              >
                SignOut
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
