import React from 'react';
import {Button} from 'antd';
import 'antd/dist/antd.css';
import {SettingOutlined} from '@ant-design/icons';
import {useHistory, useLocation} from "react-router-dom";
import cn from 'classnames'

import css from './ButtonOpensNewRoute.module.css';

interface LocationState {
    from: {
        pathname: string;
    };
}

const ButtonOpensNewRoute: React.FC = () => {

    const location = useLocation<LocationState>();
    const history = useHistory();


    const setBoolInLSAndRelocate = () => {
        const accessLS = localStorage.getItem('access');
        const access: boolean = accessLS && JSON.parse(accessLS);
        access ? localStorage.setItem('access', JSON.stringify(false)) : localStorage.setItem('access', JSON.stringify(true));
        const {from} = location.state || {from: {pathname: "/settings"}};
        history.replace(from);
    }

    return (<div className={css.circleWrapper}>

            <div className={css.rotate}><Button type="primary" shape="circle" icon={<SettingOutlined/>} size={"large"}
                                                onClick={() => setBoolInLSAndRelocate()} className={cn(css.circle)}/></div>
        </div>
    );

};

export default ButtonOpensNewRoute;

