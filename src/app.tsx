import * as React from "react";
// import { HelloComponent } from "./hello"
// import { NameEditComponent } from "./components/nameEdit";

import { HelloComponent, NameEditComponent, ColorBrowser, ColorPicker, SiderbarComponent } from './components';

import {Color} from './model/color';

export const App = () => {
    const [name, setName] = React.useState('defaultUserName');
    const [editingName, setEditingName] = React.useState("defaultUserName");

    const loadUsername = () => {
        setTimeout(()=>{
            setName("name from async call");
            setEditingName("name from async call");
        }, 500);
    }

    const [color, setColor] = React.useState<Color>({red: 20, green: 40, blue: 180});

    React.useEffect(() => {
        loadUsername();
    }, []);

    const setUserNameState = () => {
        setName(editingName);
    }

    const[isvisible, setVisible] = React.useState(false);

    return (
        <>
            <SiderbarComponent isVisible={isvisible}>
                <h1>Cool Scfi movies</h1>
                <ul>
                    <li><a href="https://www.imdb.com/title/tt0816692/">Interstellar</a></li>
                    <li><a href="https://www.imdb.com/title/tt0083658/">Blade Runner</a></li>
                    <li><a href="https://www.imdb.com/title/tt0062622/">2001: a space odyssey</a></li>
                </ul>
            </SiderbarComponent>
            <ColorBrowser color = {color} />
            <ColorPicker color={color} onColorUpdated={setColor}/>
            <HelloComponent userName={name} />
            <NameEditComponent
                initialUserName={name}
                editingName={editingName}
                onNameUpdated={setUserNameState} 
                onEditingNameUpdated={setEditingName}
                disabled={editingName === '' || editingName === name}
            />

            <div style = {{float: 'right'}}>
                <button
                    onClick={() => setVisible(!isvisible)}>
                    Toggle_Sidebar
                    </button>
            </div>
        </>
    );
}