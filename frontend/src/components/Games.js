import React, { useState, useEffect } from "react";
import api from "../api";
import { Link } from "react-router-dom";
function Games() {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get("https://api.twitch.tv/helix/games/top?first=3");
            //console.log(result.data);
            let dataArray = result.data.data;
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url
                    .replace("{width}", "300")
                    .replace("{height}", "300");
                game.box_art_url = newURL;
                return game;
            });
            console.log(finalArray);
            setGames(finalArray);
        };
        fetchData();
    }, []);
    return (
        <div>
            <div className="column1">
                {games.map(game => (
                    <div className="row-lg-3">
                        <div className="card">
                            <img className="card-img-top" src={game.box_art_url} alt="test" />
                            <div className="card-body">
                                <div className="card-title">{game.name}</div>
                                <button className="btn btn-success">
                                    <a
                                        href={"https://twitch.tv/directory/game/" + game.name}
                                        className="link"
                                        target="_blank"
                                    >
                                        <div className="nom">{game.name} streams{" "}</div>
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

export default Games;
