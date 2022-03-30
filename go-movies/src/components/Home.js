import React, { Component } from 'react';
import Ticket from "./images/movie_tickets.jpg";
import "./Home.css"

export default class Home extends Component {

    render () {
        console.log ("Inside Home")
        return (
            <div className="text-center">
                <h2>Home</h2>
                <hr />
                <img src={Ticket} alt="Movie Ticket" />
                <hr />
                <div className="tickets"></div>
            </div>
        );
    }

}