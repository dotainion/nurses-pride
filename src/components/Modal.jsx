export const Modal = ({show, onBackdropDismist, children}) =>{
    if(!show) return null;
    return(
        <div className="w-100 vh-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-center p-3" style={{zIndex: 1050}}>
            <div onClick={onBackdropDismist} className="w-100 vh-100 position-fixed top-0 start-0 bg-secondary bg-opacity-10" style={{zIndex: 1051}}></div>
            {children}
        </div>
    )
}

export const ModalBodyAlert = ({children}) =>{
    return(
        <div className="bg-white shadow text-center rounded-5 user-select-none p-4" style={{width: '500px', zIndex: 1052}}>
            {children}
        </div>
    )
}