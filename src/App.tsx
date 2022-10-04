import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {BasicPage} from "./pages";

function App() {
    return (
        <div>
            <Switch>
               <Route path={'/'} component={BasicPage}/>
            </Switch>
        </div>);
}

export default App;
