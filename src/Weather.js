import React, { Component } from 'react';
import styled from 'styled-components';

//This whole file is dedicated for the OpenWeathermap api only.

const url = "https://api.openweathermap.org/data/2.5/weather?q=södertälje&APPID=f04ab5ae018d0a655fea9c480b5b6668&units=metric";

const PartOneIconUrl = "http://openweathermap.org/img/wn/";
const PartTwoIconUrl = "@2x.png"

const capitalize = (s) => {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}


const StyledIcon = styled.img`
width: 50px;
`

const WeatherContainer = styled.div`
display: flex;
flex-direction: column;
width: 250px;
height: 120px;
padding: 10px;
margin: 10px;
background: ${props => props.theme.weatherBoxBackground};
border-radius: 10px;

& h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 28px;
    font-family: 'Open-sans', sans-serif;
    letter-spacing: 1px;
    padding-bottom: 0px;
}

& h3 {
    font-family: 'Nunito', sans-serif;
    font-size: 16px;
    letter-spacing: 0.5px;
}
`

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };

    }


    componentDidMount() {

        fetch(url)
            .then(response => response.json())
            .then(json => this.setState({ data: json }));
    }


    render() {

        const IconId = this.state.data ? this.state.data.weather[0].icon : null;
        const WeatherIcon = PartOneIconUrl + IconId + PartTwoIconUrl;
        const WeatherCity = this.state.data ? this.state.data.name : "Loading";
        const WeatherCountry = this.state.data ? this.state.data.sys.country : null;
        const Temp = this.state.data ? this.state.data.main.temp.toFixed(1) : null;
        const FeelTemp = this.state.data ? this.state.data.main.feels_like.toFixed(1) : null;
        const WeatherDescription = this.state.data ? this.state.data.weather[0].description : "Loading";
        const WDCapitalized = capitalize(WeatherDescription);

        return (
            <WeatherContainer>

                <h2> {WeatherCity}, {WeatherCountry} </h2>
                <h2><StyledIcon src={WeatherIcon} /> {Temp}°C</h2>
                <h3>{WDCapitalized}.</h3>
                <h3>Feels like {FeelTemp}°C</h3>
            </WeatherContainer>
        )
    }

}

export default Weather;