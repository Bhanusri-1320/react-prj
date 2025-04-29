import { ReactNode } from "react"

interface props {
    children: ReactNode
}

function Alert({ children }: props) {
    return (
        <>
            {/* <div className="alert alert-primary alert-dismissible">{children}</div> */}
            <div className="alert alert-primary alert-dismissible" >
                {children}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" ></button>
            </div>
        </>
    )
}
export default Alert