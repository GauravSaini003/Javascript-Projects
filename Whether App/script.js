
let city_name = document.getElementById('city');
let countryName = document.getElementById('country');
let temp = document.getElementById('temp');
let whether = document.getElementById('whether');
let Description = document.getElementById('Description');
let min = document.getElementById('min');
let max = document.getElementById('max');
let Humidity = document.getElementById('Humidity');
let wind = document.getElementById('wind');
let Visibility = document.getElementById('Visibility');

let city = ''; 


city_name.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    city = city_name.value.trim();
    
    let key = `3748780d7280c2b6c48c671ec2270b37`;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    fetch(api)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
       // console.log(data);  // Handle the JSON data here
       country(data);
       temperature(data);
       whetherInfo(data);
       visibily(data);
       windSpped(data);

      })
      .catch((error) => {
        console.error('Error fetching data:', error);  // Handle any errors
        alert('Enter a valid City ')
        city_name.value =''
      });
  }
});


function country(data){
  countryName.value = data.sys.country;
}
function temperature(data){
 
let kelvin = data.main.temp;
let minTemp = data.main.temp_min;
let temp_max = data.main.temp_max;

temp.value = conversion(kelvin);
let mintemp  = conversion(minTemp);
min.value = 'Min Temp:'+mintemp;
let maxTemp  = conversion(temp_max);
max.value = "Max Temp:"+maxTemp;
// Humidty
Humidity.value = data.main.humidity+'%';



function conversion(kelvin ){
  // Convert Kelvin to Celsius
 let  celsius = kelvin - 273.15;
// Convert Celsius to Fahrenheit
let fahrenheit = celsius * 9/5 + 32;

  return celsius.toFixed(2) + ' °C' +" / " + fahrenheit.toFixed(2) + ' °F';
}


}
function whetherInfo(data){
  whether.value = data.weather[0].main;
  Description.value = data.weather[0].description; 
  
  
  
}
function visibily(data){
  let visibility = data.visibility; // value from API in meters
console.log(visibility);

// Convert to kilometers if it's greater than 1000 meters
let visibilityInKm = (visibility / 1000).toFixed(1);

Visibility.value = visibilityInKm +' km';
}
function windSpped(data){
  let speed = data.wind.speed;

  let speedInKmh = (speed * 3.6).toFixed(2);

let speedInMph = (speed * 2.23694).toFixed(2);
  wind.value = speedInKmh+' Km' +' / '+speedInMph+' mph';
}