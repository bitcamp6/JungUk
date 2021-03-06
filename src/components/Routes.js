import React from "react";
import Login from "../member/Login";
import Main from "../pages/Main";
import {BrowserRouter as Router,Route} from "react-router-dom";
import Mypage from "../CompanyPage/Mypage";
import Navigator from "../common/Navigator";
import Payment from "../CompanyPage/Payment";
import Map from "../CompanyPage/Map";

export default () =>(
    <Router>
        <Navigator/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/mypage" component={Mypage}/>
        <Route exact path="/payment" component={Payment}/>
        <Route exact path="/order" component={Payment}/>
        <Route exact path="/map" component={Map}/>
        <Route exact path="/" component={Main}/>
    </Router>
)