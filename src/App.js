import React from 'react';
// import {  BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import TeamDetail from './Components/TeamDetail/TeamDetail';

const App = () => {
  return (
   <Router>
     <Header></Header>
     <Switch>
       <Route path="/home">
          <Home></Home>
       </Route>
       <Route exact path="/">
         <Home />
       </Route>
       <Route path = "/teamDetails/:id">
         <TeamDetail></TeamDetail>
       </Route>
       <Route path="*">
         <NotFound></NotFound>
       </Route>
     </Switch>
   </Router>
  );
};

export default App;