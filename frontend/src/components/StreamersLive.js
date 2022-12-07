import React, { useEffect, useState } from "react";
import axios from "axios"

const BACKEND_BASE_URL = "http://localhost:3001/streams/list";

function StreamersLive() {
    const [streamers, setStreamer] = useState([]);

    useEffect(() => {
        const fetchData = async () =>{
          try {
            const {streamers: response} = await axios.get(BACKEND_BASE_URL);
            setStreamer(response);
          } catch (error) {
            console.error(error.message);
          }
        }
    
        fetchData();
      }, []);

    return (
        <div>
            {streamers && streamers.map(item => (<span>{item.name}</span>))}    
        </div>
        
    );
}

export default StreamersLive;
