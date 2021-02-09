import React, { Component } from 'react';
import styled from 'styled-components';


const url = "http://api.openweathermap.org/data/2.5/weather?q=södertälje&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";

const PartOneIconUrl = "http://openweathermap.org/img/wn/";
const PartTwoIconUrl = "@2x.png"

const capitalize = (s) => {
    if (!s) return '';
    return s.charAt(0).toUpperCase() + s.slice(1);
}


const StyledImg = styled.img`
width: 50px;
`

const StyledH3 = styled.h3`
display: flex;
align-items: center;
justify-content: center;
font-size: 28px;
`

const WeatherContainer = styled.div`
display: flex;
flex-direction: column;
padding: 30px;
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
        const WeatherCity = this.state.data ? this.state.data.name : null;
        const WeatherCountry = this.state.data ? this.state.data.sys.country : null;
        const Temp = this.state.data ? this.state.data.main.temp.toFixed(1) : null;
        const FeelTemp = this.state.data ? this.state.data.main.feels_like.toFixed(1) : null;
        const WeatherDescription = this.state.data ? this.state.data.weather[0].description : null;
        const WDCapitalized = capitalize(WeatherDescription);

        return (
            <WeatherContainer>

                <h2> {WeatherCity}, {WeatherCountry} </h2>
                <StyledH3><StyledImg src={WeatherIcon} /> {Temp}°C</StyledH3>
                <h3>{WDCapitalized}. Feels like {FeelTemp}</h3>

            </WeatherContainer>
        )
    }

}

export default Weather;