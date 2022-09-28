interface IBadgePaginationProps{
    currentPage:number;
    count:number;
    onChangePage?: (event:any,value: number) => void;
}


export type {
    IBadgePaginationProps
}