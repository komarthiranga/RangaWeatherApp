import { MenuButton } from "./Util/Menu";
import { ButtonWeatherInfo } from "./WeatherInfo";
import { days } from "./Util/dates";

export const ForecastView = ({ weatherData, cityName, currentWeatherData }) => {
  const buildForecastMenuButtons = (weatherData) => {
    const getWeatherForecastByDay = (forecast) => {
      return forecast.reduce((accumulator, current) => {
        const date = new Date(current.dt * 1000);
        accumulator.set(days[date.getDay()], [
          ...(accumulator.get(days[date.getDay()]) || []),
          current,
        ]);
        return accumulator;
      }, new Map());
    };

    const map = getWeatherForecastByDay(weatherData);
    const forecastArray = Array.from(map.entries());

    return forecastArray.slice(0, 4).map((forecastOfTheDay) => {
      const weather = forecastOfTheDay[1].reduce((prev, current) =>
        prev.main.temp > current.main.temp ? prev : current
      );
      return (
        <MenuButton
          type="button"
          key={forecastOfTheDay[0]}
          name={forecastOfTheDay[0]}
        >
          <ButtonWeatherInfo
            when={forecastOfTheDay[0]}
            weatherDetails={weather}
          />
        </MenuButton>
      );
    });
  };

  return (
    <>
      <h2 style={{display: 'flex', justifyContent: "center" }}>{cityName}</h2>
      <div style={{display: 'flex', justifyContent: "center" }}>
      <MenuButton
          type="button"
          key={'now'}
          name={'Now'}
        >
        <ButtonWeatherInfo
                when={'Now'}
                weatherDetails={currentWeatherData}
            />
       </MenuButton>     
      </div>
      <div
        style={{ display: "flex", marginTop: "20px", justifyContent: "center" }}
      >
        {buildForecastMenuButtons(weatherData).map((button) => (
          <> {button} </>
        ))}
      </div>
    </>
  );
};
