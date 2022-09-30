import React from 'react';
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import {IBadgePaginationProps} from "../../interfaces";

const BadgePaginationComponent = ({currentPage,count,onChangePage}:IBadgePaginationProps) => {
    return (
        <div><Stack spacing={2}>
        <Pagination count={count} page={currentPage} onChange={onChangePage} size="large"/>
        </Stack></div>
);
};

export default BadgePaginationComponent;