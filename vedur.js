'use strict';

var axios = require('axios');
var colors = require('colors');

const service = {
  getObservationRvk: () => axios({ url : 'http://apis.is/weather/observations?stations=1,422&time=3h&anytime=0'}),
  getWeatherText: () => axios({ url : 'http://apis.is/weather/texts?types=3,2,6,11'})
};

async function getWeatherData() {
  try {
    const { data: { results: weatherObservations }} = await service.getObservationRvk();
    const { data: { results: weatherText }} = await service.getWeatherText();

    weatherObservations.map(function (data) {
      //console.log(data)
      if(!data.err) {
        console.log((data.name).bold.underline.green)
        console.log(`Frá ${data.time}`.green);
        console.log(`Hiti ${data.T} - ${data.W}`.green);
        console.log(`Vindhraði ${data.F} m/s úr ${data.D} átt`.green);
        console.log(`Úrkoma ${data.R} mm/klst`.green);
        console.log(`Rakastig ${data.RH}%`.green, '\n');
      }
    });

    weatherText.map(function (data) {
      if(data.content) {
        console.log((data.title).underline.green);
        console.log((data.content).green, '\n');
      }
    });
  } catch (data) {
    console.log(data.response.status, data.response.statusText)
  }
}

getWeatherData();
