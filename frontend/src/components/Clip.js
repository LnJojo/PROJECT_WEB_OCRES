
import React, { useState, useEffect } from "react";
import api from "../api";

function Clip() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/clips?game_id=27471&first=10");
            //console.log(result.data);
            let dataArray = result.data.data;
            let finalArray = dataArray.map(clips => {
                let newURL = clips.thumbnail_url
                    .replace("{width}", "300")
                    .replace("{height}", "300");
                clips.thumbnail_url = newURL;
                return clips;
            });
            console.log(finalArray);
            setGames(finalArray);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="row ">
                <div className="nameRow">Top Clip</div>
                {games.map(clips => (
                    <div className="col-lg-2 col-md-6 col-sm-12 mt-5 text-center">
                        <div className="card">
                            <img className="card-img-top" src={clips.thumbnail_url} alt="test" />
                            <div className="card-body">
                                <div className="card-name">{clips.title}</div>
                                <div>Clip from</div>
                                <div className="card-name1">{clips.broadcaster_name}</div>
                                <button className="btn btn-success">
                                    <a
                                        href={"https://twitch.tv/" + clips.broadcaster_name + "/clip/" + clips.id}
                                        className="link"
                                        target="_blank"
                                    >
                                        <div className="nom">{clips.view_count} views{" "}</div>
                                    </a>

                                </button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    );
}

export default Clip;
