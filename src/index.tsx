import React from 'react';
import ReactDOM from 'react-dom';
import './style-sheets/index.scss';
import themes from 'devextreme/ui/themes';
import {App} from "./components/App";

themes.initialized(() => {
        ReactDOM.render(
            <React.StrictMode>
                <App/>
            </React.StrictMode>,
            document.getElementById('root')
        );
    }
);
