function ListGroup() {
    let items: any = []
    items = ["Tokyo", "Paris", "Nairobi", "São Paulo", "Vancouver"]
    // if (items.length === 0) return <><h1>List</h1><p>No items found</p></>

    const getMessage = () => {
        return items.length === 0 && <p>No items found</p>
    }
    const handelClick = (item: any) => {
        console.log(item)
    }
    return (
        <>
            <h1>List</h1>
            {getMessage()}
            <ul className="list-group">
                {items.map((item: any) => (<li className="list-group-item" key={item} onClick={handelClick}>{item}</li>))}
            </ul>
        </>
    )

}
export default ListGroup