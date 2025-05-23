import { useState } from "react";
interface ListGroupProps {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}


function ListGroup(props: ListGroupProps) {
    // if (items.length === 0) return <><h1>List</h1><p>No items found</p></>
    // let selectedIndex = -1;// 0 means 1st item so -1
    const { items, heading, onSelectItem } = props;
    const getMessage = () => {
        return items.length === 0 && <p>No items found</p>
    }
    const [selectedIndex, setSelectedIndex] = useState(-1);

    return (
        <>
            <h1>{heading}</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item: any, index: any) => (<li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={() => {
                    setSelectedIndex(index)
                    onSelectItem(item)
                }}>{item}</li>))}
            </ul>
        </>
    )

}
export default ListGroup