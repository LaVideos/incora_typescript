import React from 'react';
import './App.css';
import {PaginationComponent} from "./components/pagination";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import {actions} from "./redux/slice";

function App() {


  // @ts-ignore
  const {page} = useAppSelector(state => state.page);
  const dispatch = useAppDispatch();

  console.log(page)

  const handleChange = (event:any, value:any) => {
  dispatch(actions.getPage(value))
  };





  return (<div>
    <PaginationComponent activePage={page} onChangePage={handleChange} perPage={10} totalItems={200} withActions={true} classes={{btn:"btn",activeBtn:"activeBtn"}}/>
  </div>);
}

export default App;
