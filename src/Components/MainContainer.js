import React, {useEffect} from "react";
import '../Styles/MainContainer.css';
import { Banner } from "./Banner";
import { FaUsers } from "react-icons/fa";
import { AudioList } from "./AudioList";


const MainContainer = () => {

    // ToDo: Add event listener using useEffect to add active css class 


    return (
        <div className="mainContainer">
            <Banner />
            <div className="menuList">
                <ul> 
                    <li><a href="#">Popular</a></li>
                    <li><a href="#">Albums</a></li>
                    <li><a href="#">Songs</a></li>
                    <li><a href="#">Fans</a></li>
                    <li><a href="#">About</a></li>
                </ul>
                <p><i><FaUsers /></i> 12.3M <span>Followers</span></p>
            </div>

            <AudioList />


        </div> 

    );
}


export {MainContainer};