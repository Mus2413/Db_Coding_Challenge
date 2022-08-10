import React, { useEffect, createContext, useReducer, useContext } from 'react';
import "./App.css";
import { BrowserRouter, Switch, Route, useHistory } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { userReducer, initialState } from './reducers/userReducer';
import LoginPage from './components/screens/LoginPage';
import LandingPage from './components/screens/LandingPage';
import Home from './components/screens/Home';
import Logout from './components/screens/Logout';
import User from './components/screens/User';
import TradeHistory from './components/screens/TradeHistory.jsx';
import BondInfo from './components/screens/BondInfo';

//create Context
const userContext = createContext();
const Routing = () => {
  const { state, dispatch } = useContext(userContext);
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({
        type: "LOGIN_USER",
        payload: user,
      })
      console.log(user);
    } else {
        history.push("/login");
    }
    console.log("SSSSSSState====>", state);
  }, [])
  return (
    <>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LandingPage} />
          <Route exact path="/login/user" component={LoginPage} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/users" component={User} />
          <Route exact path="/tradehistory" component={TradeHistory} />
          <Route exact path="/bondinfo/:id" component={BondInfo} />
      </Switch>

    </>
  )
}
const App = () => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  return (
    <>
     <userContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <ToastContainer position="top-center" />
        <Routing/>
      </BrowserRouter>
      </userContext.Provider>
    </>
  )
}

export default App;
export { userContext };