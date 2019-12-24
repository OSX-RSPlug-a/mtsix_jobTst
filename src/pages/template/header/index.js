import React from 'react'

import './styleHead.css';

//import './../styleMain.css';


//import Logo  from './../../../assets/logo.png';
import Logopb  from './../../../assets/logopb.png';


export default function Head() {
    return (
        <>

            <div className="navM">	
			    <header>
                    <nav>
                        <ul className="menu">
                            <li className="logo"><img src={Logopb} className="logo-top" alt="Logo" /></li>
                            <li className="right"><a href="#top"><i className="material-icons" title="Menu/User">apps</i><br/>Módulos</a></li>
                            <li className="item"><a href="#top"><i className="material-icons" title="Logout">exit_to_app</i><br/>Log out</a></li>
                        </ul>
                    </nav>
			    </header>
		    </div>

        </>
    )
}