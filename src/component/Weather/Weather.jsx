import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { WiDaySunny, WiCloudy, WiRain } from "react-icons/wi";

const Weather = () => {

    const [city, setCity] = useState("");
    const [data, setData] = useState(null);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [unit, setUnit] = useState("C");

    const API_KEY = "YOUR_API_KEY_HERE";

    // 🌍 Current Location
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            getWeatherByCoords(pos.coords.latitude, pos.coords.longitude);
        });
    }, []);

    // 🔥 Dynamic BG
    const getBg = (condition) => {
        if (condition === "Clouds") return "from-gray-700 to-gray-900";
        if (condition === "Rain") return "from-slate-800 to-black";
        if (condition === "Clear") return "from-indigo-700 to-black";
        return "from-indigo-900 to-black";
    };

    // 🌦️ Icons
    const getIcon = (condition) => {
        if (condition === "Clear") return <WiDaySunny size={80} />;
        if (condition === "Clouds") return <WiCloudy size={80} />;
        if (condition === "Rain") return <WiRain size={80} />;
        return <WiCloudy size={80} />;
    };

    const convertTemp = (temp) => {
        return unit === "C"
            ? (temp - 273.15).toFixed(1)
            : ((temp - 273.15) * 9 / 5 + 32).toFixed(1);
    };

    // 🌍 coords
    const getWeatherByCoords = async (lat, lon) => {
        setLoading(true);
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=baf7f987f1ea5422fc527b8829263acb`
        );
        const data = await res.json();
        setData(data);
        getForecast(data.name);
        setLoading(false);
    };

    // 🔍 Search
    const getWeather = async (cityName) => {
        if (!cityName) return;
        setLoading(true);

        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=baf7f987f1ea5422fc527b8829263acb`
        );

        const data = await res.json();

        if (data.cod !== 200) {
            alert("City not found");
            setLoading(false);
            return;
        }

        setData(data);
        getForecast(cityName);
        setLoading(false);
    };

    // 📊 Forecast
    const getForecast = async (city) => {
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=baf7f987f1ea5422fc527b8829263acb`
        );
        const data = await res.json();
        const daily = data.list.filter((_, i) => i % 8 === 0);
        setForecast(daily);
    };

    return (
        <div className={`min-h-screen bg-gradient-to-br ${getBg(data?.weather?.[0]?.main)} text-white p-4 transition-all duration-500`}>

            <div className="max-w-4xl mx-auto">

                <h1 className="text-3xl font-bold text-center mb-6">
                    Weather Pro 🌦️
                </h1>

                {/* Search */}
                <div className="flex gap-2">
                    <input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="Search city..."
                        className="flex-1 px-4 py-2 rounded-lg bg-white/20 outline-none"
                    />
                    <button
                        onClick={() => getWeather(city)}
                        className="bg-indigo-600 p-3 rounded-lg">
                        <FaSearch />
                    </button>
                </div>

                {/* Toggle */}
                <div className="text-center mt-4">
                    <button
                        onClick={() => setUnit(unit === "C" ? "F" : "C")}
                        className="bg-indigo-600 px-4 py-2 rounded-lg"
                    >
                        °{unit} → °{unit === "C" ? "F" : "C"}
                    </button>
                </div>

                {/* Loading */}
                {loading && <p className="text-center mt-4">Loading...</p>}

                {/* Weather */}
                {data && (
                    <div className="mt-6 bg-white/10 backdrop-blur-md p-6 rounded-xl text-center">

                        <h2 className="text-2xl">
                            {data.name}, {data.sys.country}
                        </h2>

                        <div className="flex justify-center">
                            {getIcon(data.weather[0].main)}
                        </div>

                        <p className="text-4xl font-bold">
                            {convertTemp(data.main.temp)}°{unit}
                        </p>

                        <p className="capitalize">{data.weather[0].description}</p>

                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                            <p>Humidity: {data.main.humidity}%</p>
                            <p>Pressure: {data.main.pressure}</p>
                        </div>
                    </div>
                )}

                {/* Forecast */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
                    {forecast.map((item, i) => (
                        <div key={i} className="bg-white/10 p-4 rounded-lg text-center">

                            <p>
                                {new Date(item.dt_txt).toLocaleDateString("en-US", {
                                    weekday: "short",
                                })}
                            </p>

                            <div className="flex justify-center">
                                {getIcon(item.weather[0].main)}
                            </div>

                            <p>{convertTemp(item.main.temp)}°{unit}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Weather;