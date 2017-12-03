require('colors');

const weatherObservation = (observation) => {
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

const weatherText = (text) => {
  text.forEach((data) => {
    if (data.content) {
      console.log((data.title).underline.green);
      console.log((data.content).green, '\n');
    }
  });
};

const errorResponse = (e) => {
  const { status, statusText } = e.response;
  console.log(`
    Failed to get weather forecast.
    Status code: ${status}
    Error message: ${statusText}
  `.bold.red);
};

module.exports = {
  weatherObservation,
  weatherText,
  errorResponse,
};
