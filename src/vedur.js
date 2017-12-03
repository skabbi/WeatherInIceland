'use strict';

const getForcast = require('./js/getForcast.js');
const print = require('./js/print.js');

async function displayWeatherForcast() {
  try {
    const weatherObservationRvk = await getForcast.observationRvk();
    const weatherText = await getForcast.weatherText();

    print.weatherObservation(weatherObservationRvk);
    print.weatherText(weatherText);
  } catch (error) {
    print.errorResponse(error);
  }
}

displayWeatherForcast();
