import { ReactNode } from "react"

interface props {
    children: ReactNode;
    closeButton: () => void
}

function Alert({ children, closeButton }: props) {
    return (
        <>
            {/* <div className="alert alert-primary alert-dismissible">{children}</div> */}
            <div className="alert alert-primary alert-dismissible" >
                {children}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={closeButton}></button>
            </div>
        </>
    )
}
export default Alert