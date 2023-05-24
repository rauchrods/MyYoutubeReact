import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';
const Searchbar = ({setvid}) => {
    let [searchText, SetSeatchText] = useState("");

    useEffect(()=>{
        getvideos();
    },[]);


    function getvideos() {
        youtube.get("/search", {
          params: {
            q: searchText,
            type: "video",
            part: "snippet"
          }
        })
          .then((result) => {
            setvid(result.data.items);
            console.log(result.data.items);
          })
          .catch((err) => {
            console.log(err);
          });
      }


    return (

        <div className="searchcontainer">
            <h1>Youtube</h1>
            <input type="text" placeholder='Search' onChange={(e) => { SetSeatchText(e.target.value) }} value={searchText} />
            <button onClick={getvideos}>Search</button>
        </div>

    )
}

export default Searchbar;