import React from 'react';

function CurrentWeather() {
    return (
        <div className='weather'>
            <div className="top">
                <div>
                    <p className='city'>new york</p>
                    <p className='description'>sunny</p>
                </div>
                <img className='weather-icon' src="icons/01d.png" alt="weather" />
            </div>

            <div className="bottom">
                <p className="temperature">90°C</p>
                <div className="details">
                    <div className="row">
                        <span className="label">Details</span>
                    </div>
                    <div className="row">
                        <span className="label">Feels like</span>
                        <span className="value">25°C</span>
                    </div>
                    <div className="row">
                        <span className="label">Wind</span>
                        <span className="value">5m/s</span>
                    </div>
                    <div className="row">
                        <span className="label">Humidity</span>
                        <span className="value">5%</span>
                    </div>
                    <div className="row">
                        <span className="label">Pressure</span>
                        <span className="value">10hPa</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CurrentWeather;