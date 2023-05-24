import { useState } from 'react';

const Display = ({ videos, setChoosenVideos }) => {



    return (
        <>

            {
                videos.length > 0 &&

                videos.map((video, index) => {
                    return <div onClick={() => { setChoosenVideos(video) }}>
                        {/* <iframe width="250" height="150" src={`https://www.youtube.com/embed/${video.id.videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                        <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}  width="200px"/>
                    </div>

                })
            }

        </>
    )
}

export default Display;