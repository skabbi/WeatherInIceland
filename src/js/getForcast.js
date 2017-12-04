'use strict';

const axios = require('axios');

const APIs = {
  getObservationRvk: () => axios({ url: 'http://apis.is/weather/observations?stations=1&time=3h&anytime=0' }),
  getWeatherText: (...types) => axios({ url: `http://apis.is/weather/texts?types=${types.toString()}` }),
};

const latestReportRvk = async () => {
  const { data: { results: weatherObservations } } = await APIs.getObservationRvk();
  return weatherObservations;
};

const weatherDescriptions = async () => {
  const REYKJAVIK_AREA = 3;
  const WHOLE_ICELAND = 2;
  const ICELAND_NEXT_DAYS = 6;
  const WARNINGS = 11;

  const { data: { results: descriptions } } =
    await APIs.getWeatherText(
      REYKJAVIK_AREA,
      WHOLE_ICELAND,
      ICELAND_NEXT_DAYS,
      WARNINGS,
    );
  return descriptions;
};

module.exports = {
  latestReportRvk,
  weatherDescriptions,
};
