import {useState} from "react";

export const usePagination = (intialState: number = 1,count:number) => {

    const [page, setPage] = useState(intialState);


    const nextTenPage = () => {
        if (page > count - 10) {
            setPage(prev => prev + 10);
        }else {
            setPage(count)
        }

    }

    const prevNextPage = () => {
        if (page < count - 10) {
            setPage(next => next - 10);
        }else {
            setPage(1);
        }
    }

    return {
        page,
        nextTenPage,
        prevNextPage
    }

}