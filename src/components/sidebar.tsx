import * as React from "react"

const classNames = require("./sidebar.css")


interface Props {
    isVisible: boolean;
}

const divStyle = (props: Props): React.CSSProperties => ({
    width: (props.isVisible) ? "23rem" : "0rem"
})

// export const SiderbarComponent = (props: Props) => (
//     <div id="mySidenav" className={classNames.sidenav}
//         style={divStyle(props)} >

//         <span>Basic side bar, first steps</span>
//     </div>
// )

export const SiderbarComponent: React.StatelessComponent<Props> = (props) => (
    <div id="mySidenav" className={classNames.sidenav}
        style={divStyle(props)} >

        {props.children}
    </div>
)