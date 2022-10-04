import {ChangeEvent} from "react";

interface IBadgePaginationProps{
    currentPage:number;
    count:number;
    onChangePage?: (event:ChangeEvent<unknown>,value: number) => void;
}


export type {
    IBadgePaginationProps
}