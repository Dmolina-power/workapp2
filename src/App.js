import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";


//Components
import PasswordReset from "./components/PasswordReset";


//Pages
import Studio from "./Pages/game";
import Feed from "./Pages/Feed";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";


const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  return (
    <>
      <Switch>
        <Route path="/signin" render={() => <Login />} />
        <Route path="/passwordReset" render={() => <PasswordReset />} />
        <Route path="/signup" render={() => <SignUp/>} />
        <Route exact path="/" render={() => (
        
          <Home/>
          )} />
        <Route path="/game" render={() => <Studio />} />
        <Route path="/feed" render={() => <Feed></Feed>} />
      </Switch>
    </>
  );
};

export default App;
