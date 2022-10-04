import React from 'react';
import {Route} from "react-router-dom";

import {SettingsPage, Task1Page, Task2Page} from "../../pages";
import PrivateRoute from "../../components/protected/ProtectedRoute";

import css from "./Body.module.css"

const Body = () => {
    return (
        <div className={css.body_layout}>
            <Route path={'/task1'}>
                <Task1Page/>
            </Route>
            <Route path={'/task2'}>
                <Task2Page/>
            </Route>
            <PrivateRoute path={'/settings'}>
                <SettingsPage/>
            </PrivateRoute>
        </div>
    );
};

export default Body;