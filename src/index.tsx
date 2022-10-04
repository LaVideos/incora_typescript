import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {setupStore} from "./components/task2/redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";



const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const store = setupStore();

root.render(
<BrowserRouter>
    <Provider store={store}>
            <App />
    </Provider>
</BrowserRouter>
);

