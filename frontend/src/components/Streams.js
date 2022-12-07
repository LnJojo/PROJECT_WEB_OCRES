import React, { useEffect, useState } from "react";
import api from "../api";
function Stream() {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/streams?first=5");
            let dataArray = result.data.data;
            //console.log(dataArray);
            let gameIDs = dataArray.map(stream => {
                return stream.game_id;
            });
            //console.log(gameIDs);

            let baseURL = "https://api.twitch.tv/helix/games?";
            let queryParams = "";
            gameIDs.map(id => {
                return (queryParams = queryParams + `id=${id}&`);
            });

            let finalURL = baseURL + queryParams;
            let gameNames = await api.get(finalURL);
            let gameNameArray = gameNames.data.data;

            let finalArray = dataArray.map(stream => {
                stream.gameName = "";
                gameNameArray.map(name => {
                    if (stream.game_id === name.id) {
                        return (stream.gameName = name.name);
                    }
                });

                let newURL = stream.thumbnail_url
                    .replace("{width}", "400")
                    .replace("{height}", "300");
                stream.thumbnail_url = newURL;
                return stream;
            });
            setChannels(finalArray);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="row flex-row">
                <div className="nameRow">Top Streamers monde</div>
                {channels.map(channel => (
                    <div className="col-lg-2 col-md-6 col-sm-12 mt-5 text-center">
                        <div className="card">
                            <img className="card-img-top" src={channel.thumbnail_url} />
                            <div className="card-body">
                                <div className="card-name">{channel.user_name}</div>
                                <div className="card-title "> {channel.gameName}</div>
                                <button className="btn btn-success ">
                                    <a
                                        href={"https://twitch.tv/" + channel.user_name}
                                        className="link"
                                        target="_blank"
                                    >
                                        <div className="nom">{channel.viewer_count} viewers</div>
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

export default Stream;
