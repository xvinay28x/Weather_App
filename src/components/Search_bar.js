import React from 'react'
import './Search_bar.css'

export default function Search_bar() {
    return (
        <div className="search_cont">
            <input type="text" className="search_bar" placeholder="Search"></input>
            <div className="search_icon">
                <img id="search" src="search.png" alt="search"/>
            </div>
        </div>
    )
}