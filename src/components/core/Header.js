
import React from "react";
import "../../assets/styles/header.scss"
import * as Mui from "@mui/material";
import EventIcon from '@mui/icons-material/Event';

function Header(props) {
        
    return (
    <>
        <nav className="navbar-main">
            <div className="container-fluid">
                <div className="row d-flex justify-content-between">
                    <div className="col-6 col-md-4 px-5 d-flex align-items-center">
                        sdsdsbbbbbbd
                    </div>
                    <div className="d-flex justify-content-end col-6 col-md-4 px-5">
                        <div className="d-flex align-items-center"> Merhaba, Büşra &nbsp;</div>
                        <div className="d-flex align-items-center todo-add-button">  
                            <i className="mdi mdi-calendar-clock mdi-36px"></i>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </>
    )
}

export default Header;