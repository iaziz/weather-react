import React from 'react';

import axios from 'axios';


import { weatherIcons, timeIcon, coordinate } from './svgIcons.js';

import { time } from './functions.js';

export let Input = React.createClass({
    getInitialState() {
        return {loaded: false};
    },
    fetchingData() {
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.input.value}&appid=44db6a862fba0b067b1930da0d769e98`)
            .then(res => {
                this.setState({data: res.data});
                this.setState({loaded: true})
                console.log(this.state.data);
            });
    },
    temp() {
        return Math.round(this.state.data.main.temp - 272.15);
    },
    render() {
        return (
            <div className="center fontbase">
                <div className="search">
                    <input
                        type="text"
                        placeholder="search"
                        ref={node => {
                            this.input = node;
                        }}
                    />
                    <input
                        type="submit"
                        value="Search"
                        onClick={this.fetchingData}
                    />

                </div>

                {this.state.loaded ?
                    <div className="time">
                        <p>{`${this.state.data.name}, ${this.state.data.sys.country}`}</p>
                        <p>
                            {timeIcon()}
                            {time(this.state.data.dt)}
                        </p>
                        <p>
                            {coordinate()}
                            {`Lon: ${this.state.data.coord.lon}°, lat: ${this.state.data.coord.lat}°`}
                        </p>
                    </div>
                    :
                    ''
                }

               {this.state.loaded ?
                    <div className="weather">

                        {weatherIcons(this.state.data.weather[0].icon)}

                        {<h1>{this.temp()}°c</h1>}
                    </div>
                    :
                    ''
               } 
                
            </div>
        );
    }
});

