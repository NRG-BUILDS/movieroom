const LoadState = ({mesaage, size, isLoading}) => {
    return ( 
        <div className="bigMovieList">
            <div className="headerWrapper">
                <h2 className="header">{ mesaage }</h2>
                <span>Swipe<span className="material-icons-outlined">navigate_next</span></span>
            </div>
            {isLoading && (<div className="tileSlide">   
               <div className="loaderDiv"></div>
               <div className="loaderDiv"></div>
               <div className="loaderDiv"></div>
            </div>)}    
            {!isLoading && (<div className="tileSlide">
                <div className="errorDiv">
                    <h2>{mesaage}</h2>
                    <p>Sorry, we're having trouble getting that for you. Maybe check your connection and try again?</p>
                </div>
            </div>)}
        </div>
     );
}
 
export default LoadState;