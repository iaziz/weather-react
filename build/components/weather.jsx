import React from 'react';

import axios from 'axios';

import { Motion, spring } from 'react-motion';

import Loader from 'halogen/DotLoader';

import { weatherIcons, timeIcon, coordinate, wind } from './svgIcons.js';

import { time } from './functions.js';

let Loading = React.createClass({
    render() {
        return (
            <Loader className="loader" color="#E88B35" size="50px" />
        );
    }
});

export let App = React.createClass({
    getInitialState() {
        return {
            loaded: false,
            trans: false,
            loading: false
        };
    },
    fetchingData() {
        this.setState({
            loaded: false,
            trans: false,
            loading: true
        });
        
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${this.input.value}&appid=41371edae1800b0d5854e0af4fba560d`)
            .then(res => {
                this.setState({data: res.data});
                this.setState({
                    loaded: true,
                    loading: false
                });
                this.setState({trans: true})
                console.log(res.data);
            });
    },
    temp() {
        return Math.round(this.state.data.main.temp - 272.15);
    },
    render() {
        return (
            <div className="center fontbase">
                <div className="search">
                    <form>
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
                            onClick={(e) => {
                                if(this.input.value.length !== 0) {
                                    e.preventDefault();
                                    console.log(`value: ${this.input.value}`)
                                    this.fetchingData();
                                }
                            }}
                        />
                    </form>
                    
                </div>

                {this.state.loading ?
                    <Loading />
                    :
                    ''
                }

                {this.state.loaded ? 

                    <Motion style={{x: spring(this.state.trans ? 1 : 0), y: spring(this.state.trans ? 0 : 50)}}>
                        {({x, y}) => 
                            <div className="time" style={{opacity: `${x}`, transform: `translate3d(${y}px, 0, 0)`}}>
                                <h5>{`${this.state.data.name}, ${this.state.data.sys.country}`}</h5>
                                <p>
                                    {timeIcon()}
                                    {time(this.state.data.dt)}
                                </p>
                                <p>
                                    {coordinate()}
                                    {`Lon: ${this.state.data.coord.lon}°, lat: ${this.state.data.coord.lat}°`}
                                </p>
                            </div>
                        }
                    </Motion>
                :
                ''
                }

            

               {this.state.loaded ?
                    <Motion style={{x: spring(this.state.trans ? 1 : 0), y: spring(this.state.trans ? 0 : 50)}}>
                        {({x, y}) => 
                            <div className="weather" style={{opacity: `${x}`, transform: `translate3d(0, ${y}px, 0)`}}>

                                {weatherIcons(this.state.data.weather[0].icon)}

                                {<h1>{this.temp()}°c</h1>}
                                {<h6>{this.state.data.weather[0].description}</h6>}

                                <div>
                                    {wind()}
                                    <h4>{this.state.data.wind.speed} meter/sec</h4>
                                    <h6>Wind Direction {this.state.data.wind.deg}°</h6>
                                </div>
                            </div>
                        }
                    </Motion>
                    
                    :
                    ''
               } 
                
            </div>
        );
    }
});

