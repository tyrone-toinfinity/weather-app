import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "./Forecast.css";

const WEEK_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

export default function Forecast({ data }) {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <label className="title">Daily</label>
      <p className="forecast-desc">7-Day Forecast</p>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              {" "}
              <AccordionItemButton>
                <div className="daily-item">
                  <img
                    alt="weather"
                    className="icon-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[index]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(((item.main.temp_min - 273.15) * 9) / 5 + 32)}
                    &#176; /{" "}
                    {Math.round(((item.main.temp_max - 273.15) * 9) / 5 + 32)}
                    &#176;
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid">
                <div className="daily-details-grid-item">
                  <label>Pressure </label>
                  <label>{item.main.pressure} hPa</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Humidity </label>
                  <label>{item.main.humidity} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Clouds </label>
                  <label>{item.clouds.all} %</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Wind </label>
                  <label>{item.wind.speed} mph</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Sea Level </label>
                  <label>{item.main.sea_level} m</label>
                </div>
                <div className="daily-details-grid-item">
                  <label>Feels like</label>
                  <label>
                    {" "}
                    {Math.round(((item.main.feels_like - 273.15) * 9) / 5 + 32)}
                    &#176;
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}