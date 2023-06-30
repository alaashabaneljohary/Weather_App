let city = document.getElementById("city") ;
let searchBtn = document.getElementById("search-btn") ;
let day = document.getElementById("day") ;
let todayDate = document.getElementById("today-date") ;
let locatio = document.getElementById("location") ;
let todayDegree = document.getElementById("today-degree") ;
let todayIcon = document.getElementById("today-icon") ;
let todayDescription = document.getElementById("today-description") ;
let humidty = document.getElementById("humidty") ;
let wind = document.getElementById("wind") ;
let compass = document.getElementById("compass") ;
let monthName = ['Jan','Feb','March','April','May','June','July','Aug','Spet','Oct','Nov','Dec'];
let days = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday",
 ];
 let apiResponse ;
//  let currentCity = "Egypt";
function getWeatherData(currentCity="Egypt") {
    let getWeather = new XMLHttpRequest() ;
getWeather.open("GET" , `https://api.weatherapi.com/v1/forecast.json?key=fc6b60362cf54beba45225216232906&q=${currentCity}&days=7&aqi=yes&alerts=yes`) ;
getWeather.send() ;
getWeather.addEventListener("readystatechange" , function(){
    if(getWeather.readyState == 4 && this.status ==200) 
    {
        apiResponse   = JSON.parse( getWeather.response) ;
        console.log(apiResponse) ;
        displayWeather() ;
    }
})
}
getWeatherData() ;
function displayWeather() {

    let date = new Date() ;
    console.log(date)
    day.innerHTML = days[date.getDay()] ;
    todayDate.innerHTML = `${date.getDate()} ${monthName[date.getMonth()]}` ;
    locatio.innerHTML = `${apiResponse.location.name} , ${apiResponse.location.country}`
    todayDegree.innerHTML = apiResponse.current.temp_c ;
    todayIcon.setAttribute("src" , `https:${apiResponse.current.condition.icon}`);
    todayDescription.innerHTML = apiResponse.current.condition.text ;
    humidty.innerHTML = apiResponse.current.humidity ;
    wind.innerHTML = apiResponse.current.wind_kph;
    compass.innerHTML = apiResponse.current.wind_dir;
}

searchBtn.addEventListener("click" , function() {
    currentCity = city.value ;
   getWeatherData(currentCity)
    
})