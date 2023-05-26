import React from 'react';

function CurrentWeather({ data }) {
    return (
        <div className='weather'>
            <div className="top">
                <div>
                    <p className='city'>{data.city}</p>
                    <p className='description'>{data.weather[0].description}</p>
                </div>
                <img className='weather-icon' src={`icons/${data.weather[0].icon}.png`} alt="weather" />
            </div>

            <div className="bottom">
                <p className="temperature">{Math.round(data.main.temp)}°C</p>
                <div className="details">
                    <div className="row">
                        <span className="label">Details</span>
                    </div>
                    <div className="row">
                        <span className="label">Feels like:</span>
                        <span className="value">{Math.round(data.main.feels_like)}°C</span>
                    </div>
                    <div className="row">
                        <span className="label">Wind:</span>
                        <span className="value">{data.wind.speed}m/s</span>
                    </div>
                    <div className="row">
                        <span className="label">Humidity:</span>
                        <span className="value">{data.main.humidity}%</span>
                    </div>
                    <div className="row">
                        <span className="label">Pressure:</span>
                        <span className="value">{data.main.pressure}hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;