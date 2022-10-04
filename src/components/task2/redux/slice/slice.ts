import {createSlice} from "@reduxjs/toolkit";

interface IInitialState{
    page:number
}


const initialState: IInitialState = {
   page:1
};


const slice = createSlice({
    name:'slice',
    initialState,
    reducers:{
        getPage:(state, action)=>{
            state.page = action.payload
        }
    }
});

const {reducer:showReducer,actions:{getPage}} = slice;


const actions = {
    getPage
}

export {
    showReducer,
    actions
}