import React from 'react';
import {NavLink} from "react-router-dom";
import {Body, Footer, Header} from "../index";


import css from "./MainLayout.module.css"

const MainLayout = () => {

    const json_access = localStorage.getItem('access');

    const access: boolean = json_access && JSON.parse(json_access);

    return (
        <div className={css.base}>
            <div className={css.header}><Header/></div>
            <div className={css.sideBarAndBody}>
                <div className={css.sideBar}>
                    <div className={css.index_link}><NavLink to={"/"}>Main</NavLink></div>
                    <div className={css.link}>
                        <div><NavLink to="/task1">Task1</NavLink></div>
                        <div><NavLink to="/task2">Task2</NavLink></div>
                        {access && <div><NavLink to="/settings">Settings</NavLink></div>}
                    </div>
                </div>
                <Body/>
            </div>
            <div className={css.footer}><Footer/></div>
        </div>
    );
};

export default MainLayout;