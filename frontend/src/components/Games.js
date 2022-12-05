import React from "react";

function Games() {
    return (
        <div>
            <p></p>
            <div className="row">
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src="https://www.pedagojeux.fr/wp-content/uploads/2019/11/1280x720_LoL.jpg" alt="a" />
                        <div className="card-body">
                            <div class="col-md-12 text-center">
                                <h5 className="card-title" >League of Legends</h5>
                                <button type="button" class="btn btn-success" >
                                    Watch
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src="https://clips-media-assets2.twitch.tv/AT-cm%7C257910056-preview-480x272.jpg" alt="faker" />
                        <div className="card-body">
                            <div class="col-md-12 text-center">
                                <h3 className="card-title">Faker</h3>
                                <h5 className="card-text"> League of Legends</h5>
                                <div className="card-text">
                                    15 382 live viewers
                                </div>
                                <button type="button" class="btn btn-success" >
                                    <a>
                                        Watch Faker's stream
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="card">
                        <img className="card-img-top" src="https://i.ytimg.com/vi/N0zCdgfE29s/maxresdefault.jpg" alt="kameto" />
                        <div className="card-body">
                            <div class="col-md-12 text-center">
                                <h3 className="card-title">Kameto</h3>
                                <h5 className="card-text">Just chatting</h5>
                                <div className="card-text">
                                    10 243 live viewers
                                </div>
                                <button type="button" class="btn btn-success" >
                                    <a>
                                        Watch Kameto's stream
                                    </a>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>




            </div>



        </div>
    );
}

export default Games;
