'use strict';

const axios = require('axios');

const APIs = {
  getObservationRvk: () => axios({ url: 'http://apis.is/weather/observations?stations=1&time=3h&anytime=0' }),
  getWeatherText: () => axios({ url: 'http://apis.is/weather/texts?types=3,2,6,11' }),
};

const observationRvk = async () => {
  const { data: { results: weatherObservations } } = await APIs.getObservationRvk();
  return weatherObservations;
};

const weatherText = async () => {
  const { data: { results: text } } = await APIs.getWeatherText();
  return text;
};

module.exports = {
  observationRvk,
  weatherText,
};
