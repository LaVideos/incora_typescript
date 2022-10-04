import * as React from 'react';

import {IPaginationProps} from "../../interfaces";
import BadgePaginationComponent from "./BadgePaginationComponent";
import BadgeButtonNavComponent from "./BadgeButtonNavComponent";

import css from "./modules/PaginationComponent.module.css"
import cn from "classnames"
import {useAppDispatch} from "../../hooks/hooks";
import {actions} from "../../redux/slice";


export default function PaginationComponent({
                                                activePage,
                                                totalItems,
                                                perPage,
                                                withActions,
                                                onChangePage,
                                                classes
                                            }: IPaginationProps) {


    const dispatch = useAppDispatch();




    let count = totalItems / perPage;




    const nextTenPage = () => {
        if (activePage < count - 10) {
            const next_ = activePage + 10;
            dispatch(actions.getPage(next_))
        } else {
            dispatch(actions.getPage(count))
        }


    }

    const prevTenPage = () => {
        if (activePage > count - 10) {
            const prev_ = activePage - 10;
            dispatch(actions.getPage(prev_))
        } else {
            dispatch(actions.getPage(1))

        }
    }


    return (
        <div className={cn(css.container)}>
            {withActions && <BadgeButtonNavComponent data={'Prev 10'} disabled={activePage === 1} onclick={prevTenPage} classes={classes}/>}

            <BadgePaginationComponent currentPage={activePage} count={count} onChangePage={onChangePage}/>

            {withActions && <BadgeButtonNavComponent data={'Next 10'} disabled={activePage === count} onclick={nextTenPage} classes={classes}/>}
        </div>
    )

}