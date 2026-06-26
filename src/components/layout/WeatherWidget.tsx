"use client";

import { useEffect, useState } from "react";
import { Cloud, CloudRain, Sun, Loader2 } from "lucide-react";

interface WeatherData {
  temp: number;
  code: number;
}

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        // Kabarnet coordinates: 0.4938 N, 35.7335 E
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=0.4938&longitude=35.7335&current_weather=true");
        if (!res.ok) return;
        const data = await res.json();
        setWeather({
          temp: Math.round(data.current_weather.temperature),
          code: data.current_weather.weathercode,
        });
      } catch (error) {
        console.error("Failed to fetch weather", error);
      }
    }
    fetchWeather();
  }, []);

  if (!weather) {
    return (
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm text-[var(--color-primary)] opacity-70">
        <Loader2 className="h-4 w-4 animate-spin" />
      </div>
    );
  }

  let WeatherIcon = Sun;
  if (weather.code >= 1 && weather.code <= 3) WeatherIcon = Cloud;
  if (weather.code >= 51 && weather.code <= 65) WeatherIcon = CloudRain;
  if (weather.code >= 95) WeatherIcon = CloudRain;

  return (
    <div className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-md border border-[var(--color-border)] rounded-full text-sm font-bold text-[var(--color-primary)] shadow-sm hover:shadow-md transition-all">
      <WeatherIcon className="h-4 w-4 text-[var(--color-accent)]" />
      <span>{weather.temp}°C Kabarnet</span>
    </div>
  );
}
