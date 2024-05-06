import React, { useEffect, useState } from 'react'
import "./Header.css"
import { Link, NavLink } from 'react-router-dom'



function Header() {
    const [languages, setLanguages] = useState(["English",])
    const [textActive,setTextActive]=useState(true);
    return (
        <>
            <nav class="navbar navigation px-4 ">
                <div class="container-fluid p-2">
                    <Link to="/" className="flex items-center navbar-brand " onClick={()=>setTextActive(true)}>
                        <div className='v-center' >
                            <img src="https://gmt.vwgroup.com/assets/icons/gmt-logo.svg" alt="" />
                            <a class="navbar-brand ms-3 title">Group Translate</a>
                        </div>
                    </Link>
                    <div class="dropdown">
                        <button class="dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            English
                        </button>
                        <ul class="dropdown-menu">
                            {languages.map((lang, index) => {
                                return (
                                    <li key={index}><a class="dropdown-item" href="#">{lang}</a></li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
            <div class="container-fluid switch">
                <div class="row">
                    <NavLink to="text" className={({isActive})=>`col switch-1 ${isActive||textActive?"active":""}`}>
                        <span>Text</span>
                    </NavLink>
                    
                    <NavLink to="document" className={({isActive})=>`col switch-2 ${isActive?"active":""}`} onClick={()=>setTextActive(false)}>   
                        <span>Document</span>
                    </NavLink>
                </div>
            </div>
        </>
    )
}

export default Header