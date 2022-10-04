import React, {ChangeEvent} from 'react';
import {PaginationComponent} from "../components/task2/components/pagination";
import {actions} from "../components/task2/redux/slice";
import {useAppDispatch, useAppSelector} from "../components/task2/hooks/hooks";

import css from "./Task2Page.module.css"

const Task2Page = () => {

    const {page}:any = useAppSelector(state => state.page);
    const dispatch = useAppDispatch();

    const handleChange = (event: ChangeEvent<unknown>,value: number) => {
        dispatch(actions.getPage(value))
    };


    return (
        <div className={css.containerTask2}>
            <PaginationComponent activePage={page} onChangePage={handleChange} perPage={10} totalItems={200} withActions={true} classes={{btn:"btn",activeBtn:"activeBtn"}}/>
        </div>
    );
};

export default Task2Page;