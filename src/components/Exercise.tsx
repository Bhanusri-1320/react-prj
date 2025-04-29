import { useState } from "react";
import Alert from "./Alert";

interface props {
    children: string;
    color: string;
    // onButtonClick: () => void;
    // flag: boolean;
}
function Exercise({ children, color = 'primary' }: props) {
    const [flag, setFlag] = useState(false);
    const handleButtonClick = () => {
        return flag ? <Alert>Button Clicked</Alert> : null;
    }

    return (
        <>
            {handleButtonClick()}
            <button className={"btn btn-" + color} onClick={() => { setFlag(true) }}>{children}</button>
        </>
    )
}
export default Exercise