import * as React from "react"
import { Color } from "../model/color"

interface Props {
    color: Color;
    onColorUpdated: (color: Color) => void;
}

interface PropsColorSlider {
    value: number;
    onValueUpdated: (newValue: number) => void;
}

const ColorSliderComponent = (props: PropsColorSlider) => {
    return (
        <div>
            <input 
                 type="range"
                 min="0"
                 max="255"
                 value={props.value}
                 onChange={event => props.onValueUpdated(+event.target.value)}
            />
        </div>
    );
}

const updateColor = (props: Props, colorId: keyof Color) => (value) => {
    props.onColorUpdated ({
        ...props.color,
        [colorId]: value
    })
}


export const ColorPicker = (props: Props) => (
    <>
        {Object.keys(props.color).map((field: keyof Color) => (
            <ColorSliderComponent
                key={field}
                value={props.color[field]}
                onValueUpdated={updateColor(props, field)}
        />
        ))}
    </>
)

// export const ColorPicker = (props: Props) => (
//     <div>
//        <ColorSliderComponent
//             value = {props.color.red}
//             onValueUpdated={updateColor(props, 'red')}
//             // onValueUpdated = {(value) => props.onColorUpdated(
//             //     {
//             //         red: value,
//             //         green: props.color.green,
//             //         blue: props.color.blue
//             //     }
//             // )}
//         />
        
//         <br />
//         <ColorSliderComponent
//             value = {props.color.green}
//             onValueUpdated={updateColor(props, 'green')}
//             // onValueUpdated = {(value) => props.onColorUpdated(
//             //     {
//             //         red: props.color.red,
//             //         green: value,
//             //         blue: props.color.blue
//             //     }
//             // )}
//         />

//         <br />
//         <ColorSliderComponent
//             value = {props.color.blue}
//             onValueUpdated={updateColor(props, 'blue')}
//             // onValueUpdated = {(value) => props.onColorUpdated(
//             //     {
//             //         red: props.color.red,
//             //         green: props.color.green,
//             //         blue: value
//             //     }
//             // )}
//         />

//     </div>
// )