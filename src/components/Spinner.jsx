export const Spinner = ({show, inline, className, style}) =>{
    if(!show) return null;
    const css = inline ? 'h-100' : 'vh-100 position-fixed start-0 top-0';
    return(
        <div className={className} style={style}>
            <div className={`d-flex align-items-center justify-content-center ${css} w-100`}>
                <div className="spinner-border text-primary">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    )
}