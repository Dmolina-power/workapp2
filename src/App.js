import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";


//Components
import PasswordReset from "./components/PasswordReset";


//Pages
import Games from "./Pages/game";
import Feed from "./Pages/Feed";
import Notes from "./Pages/Notes";
import Sales from "./Pages/Sales";
import Home from "./Pages/Home";
import Login from "./Pages/Login";



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
        <Route exact path="/" render={() => (
        
          <Home/>
          )} />
        <Route path="/games" render={() => <Games></Games>} />
        <Route path="/feed" render={() => <Feed></Feed>} />
        <Route path="/notes" render={() => <Notes></Notes>} />
        <Route path="/games" render={() => <Games></Games>} />
        <Route path="/sales" render={() =>  <Sales></Sales>} />
      </Switch>
    </>
  );
};

export default App;
