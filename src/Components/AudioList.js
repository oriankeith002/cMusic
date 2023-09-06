import React from "react";
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from "react-icons/fa";
import { Songs } from "./Songs";

const AudioList = () => {

    return (
        <div className="audioList">
            <h2 className="title">The list <span>{`${Songs.length} songs`}</span></h2>

            <div className="songsContainer">

                {
                    Songs && Songs.map((song) => (
                        <div className="songs" key={song?.id}>
                            <div className="count">#{song?.id}</div>
                            <div className="song">
                                <div className="imgBox">
                                    <img src="" alt="" />
                                </div> 

                                <div className="section">
                                    <p className="songName">
                                        {song?.songName}
                                        <span className="spanArtist">{song?.artist}</span>
                                    </p> 
                                    <div className="hits">
                                        <p className="hit">
                                            <i><FaHeadphones /></i>
                                            95,490,102
                                        </p>
                                        <p className="duration">
                                            <i><FaRegClock /></i>
                                            03:04
                                        </p>
                                        <div className="favourite">
                                            <i><FaHeart /></i>
                                            <i><FaRegHeart /></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
               
            </div>
        </div>
    );
}

export {AudioList};