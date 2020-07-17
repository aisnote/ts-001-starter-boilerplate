import * as React from 'react'
import * as ReactCom from 'react-dom'

import { HelloComponent } from './hello';

ReactCom.render(
    <HelloComponent/>,
    document.getElementById('root')
);
