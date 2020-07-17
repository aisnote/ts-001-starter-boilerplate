import * as React from 'react'
import * as ReactCom from 'react-dom'
import { App } from './app'

// import { HelloComponent } from './hello';

ReactCom.render(
    // <HelloComponent userName="Elliot"/>,
    <App />,
    document.getElementById('root')
);
