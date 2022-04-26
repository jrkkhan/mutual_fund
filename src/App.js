import React, { useState, useEffect } from "react";
import Home from './Home';
import Clients from './Clients';
import Clientform from './Clientform';
import Message from './Message';
import Setting from './Setting';
import Login from './Login';
import Testing from './Testing';
import FreeTrading from './FreeTrading';
import Investment from './Investment';
import {Switch, Route, Redirect} from "react-router-dom";
const App = () => {
useEffect(() => {
window.scrollTo(0, 0)
document.title ="Home"
}, [])
return(
<>
<Switch>
<Route exact path="/" component={Home} />
<Route exact path="/Clients" component={Clients} />
<Route exact path="/Message" component={Message} />
<Route exact path="/Setting" component={Setting} />
<Route exact path="/Login" component={Login} />
<Route exact path="/Testing" component={Testing} />
<Route exact path="/FreeTrading" component={FreeTrading} />
<Route exact path="/investment" component={Investment} />
<Route exact path="/Clientform" component={Clientform} />
<Redirect to="/" />
</Switch>
</>
);
};
export default App;