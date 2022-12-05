import React from "react";
function FRStreams() {
    return (
        <div>
            <div className="row">
                <div className="col-lg-3 offset-lg-6">
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

export default FRStreams;
