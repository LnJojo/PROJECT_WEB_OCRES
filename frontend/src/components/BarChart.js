
import { Bar } from "react-chartjs-2";
import api from "../api";
import React, { useState, useEffect } from "react";
let stream = [];

function BarChart() {
    const fetchData = async () => {
        const result = await api.get("https://api.twitch.tv/helix/streams?first=5");
        for (var i = 0; i < 5; i++) {
            stream.push(result.data[i]);
        }
    };
    const labels = [stream[0].user_login, stream[1].user_login, stream[2].user_login, stream[3].user_login, stream[4].user_login];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "Followers Comparaison",
                backgroundColor: "blueviolet",
                borderColor: "rgb(255, 99, 132)",
                data: [14, 32],
            },
        ],
    };
    return (
        <div>
            <div className="titre">Graphe</div>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;

