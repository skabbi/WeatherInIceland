'use strict';

const axios = require('axios');
require('colors');

const service = {
  getObservationRvk: () => axios({ url: 'http://apis.is/weather/observations?stations=1&time=3h&anytime=0' }),
  getWeatherText: () => axios({ url: 'http://apis.is/weather/texts?types=3,2,6,11' }),
};

const getObservationRvk = async () => {
  const { data: { results: weatherObservations } } = await service.getObservationRvk();
  return weatherObservations;
};

const getWeatherText = async () => {
  const { data: { results: weatherText } } = await service.getWeatherText();
  return weatherText;
};

const printWeatherObservation = (observation) => {
  observation.forEach((data) => {
    if (!data.err) {
      console.log((data.name).bold.underline.green);
      console.log(`Frá ${data.time}`.green);
      console.log(`Hiti ${data.T} - ${data.W}`.green);
      console.log(`Vindhraði ${data.F} m/s úr ${data.D} átt`.green);
      console.log(`Úrkoma ${data.R} mm/klst`.green);
      console.log(`Rakastig ${data.RH}%`.green, '\n');
    }
  });
};

const printWeatherText = (text) => {
  text.forEach((data) => {
    if (data.content) {
      console.log((data.title).underline.green);
      console.log((data.content).green, '\n');
    }
  });
};

async function getWeatherData() {
  try {
    const weatherObservationRvk = await getObservationRvk();
    const weatherText = await getWeatherText();

    printWeatherObservation(weatherObservationRvk);
    printWeatherText(weatherText);
  } catch (data) {
    console.log(data.response.status, data.response.statusText);
  }
}

getWeatherData();
