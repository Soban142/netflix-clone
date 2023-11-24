import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Pages/homeScreen/HomeScreen";
import LoginScreen from "./Pages/loginScreen/LoginScreen";
import { auth, onAuthStateChanged } from "./firebase";
import { login, logout } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "./utils/ProtectedRoute";
import ProfileScreen from "./Pages/profileScreen/ProfileScreen";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  console.log(user);

  useEffect(() => {
    // const unSubscribe =
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // console.log("working");
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
          })
        );
      } else {
        console.log("error");
        dispatch(logout());
      }
    });

    // return unSubscribe;
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomeScreen />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile"
            element={
              // <ProtectedRoute>
              <ProfileScreen />
              // </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
