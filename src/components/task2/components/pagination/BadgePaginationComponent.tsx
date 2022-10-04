import React from 'react';
import Pagination from "@mui/material/Pagination";
import {IBadgePaginationProps} from "../../interfaces";

import css from './modules/BadgePagination.module.css'

const BadgePaginationComponent = ({currentPage,count,onChangePage}:IBadgePaginationProps) => {




    return (
        <div>
        <Pagination count={count} page={currentPage} onChange={onChangePage} size="large" className={css.pagination}/>
       </div>
);
};

export default BadgePaginationComponent;