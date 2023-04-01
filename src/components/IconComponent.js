import logo from "../logo.svg";
import {useSelector} from "react-redux";

function IconComponent () {

    const rotation = useSelector(state => state.rotation.value)

    return (
        <img
            src={logo}
            className="App-logo"
            alt="logo"
            style={{
                animation: `App-logo-spin ${rotation/3}s linear infinite`
            }}
        />
    )
}

export default IconComponent