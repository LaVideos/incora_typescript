import * as React from 'react';

import {IPaginationProps} from "../../interfaces";
import BadgePaginationComponent from "./BadgePaginationComponent";
import BadgeButtonNavComponent from "./BadgeButtonNavComponent";

import css from "./modules/PaginationComponent.module.css"
import cn from "classnames"
import {useAppDispatch} from "../../hooks/hooks";
import {actions} from "../../redux/slice";
import {useState} from "react";
import {usePagination} from "../../../../customHook/usePagination";

export default function PaginationComponent({
                                                activePage,
                                                totalItems,
                                                perPage,
                                                withActions,
                                                onChangePage,
                                                classes
                                            }: IPaginationProps) {


    let count = totalItems / perPage;

    // const dispatch = useAppDispatch();
    //
    //
    //
    //
    // const nextTenPage = () => {
    //     if (activePage < count - 10) {
    //         const next_ = activePage + 10;
    //         dispatch(actions.getPage(next_))
    //     } else {
    //         dispatch(actions.getPage(count))
    //     }
    //
    //
    // }
    //
    // const prevTenPage = () => {
    //     if (activePage > count - 10) {
    //         const prev_ = activePage - 10;
    //         dispatch(actions.getPage(prev_))
    //     } else {
    //         dispatch(actions.getPage(1))
    //
    //     }
    // }

    const {page, prevNextPage, nextTenPage} = usePagination(activePage,count);


    return (
        <div className={cn(css.container)}>
            {withActions && <BadgeButtonNavComponent data={'Prev 10'} disabled={page === 1} onclick={() => {
                prevNextPage();
            }}
                                                     classes={classes}/>}

            <BadgePaginationComponent currentPage={page?page:activePage} count={count} onChangePage={onChangePage}/>

            {withActions &&
                <BadgeButtonNavComponent data={'Next 10'} disabled={page === count} onclick={() => {
                    nextTenPage();
                }} classes={classes}/>}
        </div>
    )

}