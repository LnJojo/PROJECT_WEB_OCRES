import React, { useEffect, useState } from "react";


const BACKEND_BASE_URL = "http://localhost:3001/streams/";

function StreamersLive() {
    const [streamers, setStreamer] = useState({});

    useEffect(() => {
        fetch(BACKEND_BASE_URL)

        .then(data => setStreamer(data))
    }, [])

    return (
        <p>{streamers.name}</p>
        
    );
}

export default StreamersLive;
