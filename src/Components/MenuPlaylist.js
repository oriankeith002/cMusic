import React from "react";
import {FaPlus} from 'react-icons/fa';
import {BsMusicNoteList, BsTrash} from 'react-icons/bs';
import {PlayList} from './PlayList';


const MenuPlaylist = () => {
    
    return (
        <div className="playlistContainer">
            <div className="nameContainer">
                <p>PlayList</p>
                <i><FaPlus /></i>
            </div>
            <div className="playListScroll">
                {
                    PlayList && PlayList.map((pitem) => (
                        <div className="playList">
                            <i className="list"><BsMusicNoteList /></i>
                            <p>{pitem.name}</p>
                            <i className="trash"><BsTrash /></i>
                        </div>
                    ))
                } 
                
            </div>
        </div>
    );
};

export { MenuPlaylist }