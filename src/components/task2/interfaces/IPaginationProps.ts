import {ChangeEvent} from "react";

interface IPaginationProps {
    activePage: number;
    totalItems: number;
    perPage: number;
    withActions?: boolean;
    classes?: {
        btn?: string;
        activeBtn?: string;
    }
    onChangePage: (event:ChangeEvent<unknown>,newPage: number) => void;
}

export type {
    IPaginationProps
}