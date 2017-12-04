require('colors');

const weatherReports = (reports) => {
  reports.forEach((report) => {
    if (!report.err) {
      console.log((report.name).bold.underline.green);
      console.log(`Frá ${report.time}`.green);
      console.log(`Hiti ${report.T} - ${report.W}`.green);
      console.log(`Vindhraði ${report.F} m/s úr ${report.D} átt`.green);
      console.log(`Úrkoma ${report.R} mm/klst`.green);
      console.log(`Rakastig ${report.RH}%`.green, '\n');
    }
  });
};

const weatherDescriptions = (descriptions) => {
  descriptions.forEach((description) => {
    if (description.content) {
      console.log((description.title).bold.underline.green);
      console.log((description.content).green, '\n');
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
  weatherReports,
  weatherDescriptions,
  errorResponse,
};
