

const DisplayMain = ({choosenvideos})=>{



    return(
        
        
         <>
         {
            choosenvideos!=null &&
            
            <>
                <iframe width="80%" height={"250px"} src={`https://www.youtube.com/embed/${choosenvideos.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe> 
                <div className="desc">
                    <h2>{choosenvideos.snippet.title}</h2>
                    <p>{choosenvideos.snippet.description}</p>
                    <p>uploaded at: {choosenvideos.snippet.publishTime}</p>
                </div>
            </>

         }
         </>

    )
}

export default DisplayMain;