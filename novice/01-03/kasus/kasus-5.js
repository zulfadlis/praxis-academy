celciusToFahrenheit = (celciusToF) => {
  let celcius = (celciusToF / 5) * 9 + 32;
  console.log(`${celciusToF} °C is ${celcius} °F`);
};

fahrenheitToCelsius = (fahrenheitToC) => {
  let fahrenheit = ((fahrenheitToC - 32) * 5) / 9;
  console.log(`${fahrenheitToC} °F is ${fahrenheit} °C`);
};

celciusToFahrenheit(2);
fahrenheitToCelsius(35.6);
