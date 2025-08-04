import React from 'react';
import {createRoot} from 'react-dom/client'
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import './index.css'
import App from './App.tsx'
import {persistor, store} from "@/shared/store";

createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
);
