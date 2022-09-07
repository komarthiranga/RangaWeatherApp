import "./index.css";
import City from "./Components/City";
import Layout from "./Components/Util/Layout";
import Loader from "./Components/Util/Loader";
import React, { useState } from "react";
import { ErrorBoundary } from "./Components/Error/ErrorBoundary";
import { ForecastView } from "./Components/ForecastView";
function App() {
  const [loading, setLoader] = useState(false);
  const [forcastDetails, setForecastDetails] = useState([]);
  const [currentWeatherData, setCurrentWeatherData] = useState(null);

  const [cityName, setCityName] = useState('');
  const isLoading = (isLoadingStatus) => {
    setLoader(isLoadingStatus);
  };
  const forecastData = (data, currentWeatherResponse, cityName) => {
    setForecastDetails(data);
    setCurrentWeatherData(currentWeatherResponse);
    setCityName(cityName);
  }

  return (
    <ErrorBoundary>
      <Layout>
        <City isLoading={isLoading} forecastData={forecastData} />
        {loading && <Loader />}
        {(!loading && forcastDetails.length !== 0) && <ForecastView weatherData={forcastDetails} currentWeatherData={currentWeatherData} cityName={cityName} />}
      </Layout>
    </ErrorBoundary>
  );
}

export default App;
