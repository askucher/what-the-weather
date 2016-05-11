actions.getWeather = function(sessionId, context, cb){
  console.log('getting-weather');
  context.forecast = 'sunny';
  return cb(context);
};
