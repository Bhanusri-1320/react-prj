import { Children } from "react";

interface props {
    children: string;
    color: string;
    onButtonClick: () => void
}
function Button({ children, onButtonClick, color = 'primary' }: props) {
    return (
        <button className={"btn btn-" + color} onClick={onButtonClick}>{children}</button>
    )
}
export default Button