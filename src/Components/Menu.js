import React, { useEffect } from "react";

const Menu = ({title, menuObject}) => {

    // ToDo: verify that event handler works

    // useEffect(()=>{
    //     const allLi = document.querySelector('.MenuContainer ul').querySelectorAll("li");
    //     console.log(allLi)

    //     const changeMenuActive = (event) => {
    //         allLi.forEach((n) => n.classList.remove("active"));
    //         this.classList.add("active"); // add active class to currently clicked item.
    //     }

    //     allLi.forEach( n => n.addEventListener('click', changeMenuActive));
    // },[])

    return (
        <div className="MenuContainer">
            <p>{title}</p>
            <ul>
                {
                    menuObject && menuObject.map((item) => (
                        <li key={item.id}>
                            <a href="#">
                                <i>{item.icon}</i>
                                <span>{item.name}</span>
                            </a>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
};

export {Menu};