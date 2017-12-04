'use strict';

const getForcast = require('./js/getForcast.js');
const print = require('./js/print.js');

async function displayWeatherForcast() {
  try {
    const weatherReportRvk = await getForcast.latestReportRvk();
    const weatherDescriptions = await getForcast.weatherDescriptions();

    print.weatherReports(weatherReportRvk);
    print.weatherDescriptions(weatherDescriptions);
  } catch (error) {
    print.errorResponse(error);
  }
}

displayWeatherForcast();
