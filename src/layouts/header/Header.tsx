import React from 'react';
import {ButtonOpensNewRoute} from "../../components";
import css from './Header.module.css'

const Header = () => {
    return (
        <div className={css.button_ls}>
            <ButtonOpensNewRoute/>
        </div>
    );
};

export default Header;