const api = {
    key: "a7e930bb4bcd76678f5598d4bb21d587",
    base: "https://api.openweathermap.org/data/2.5/"
}

// code trying to get user's geolocation

// let geolocationfinder = window.navigator.geolocation;
// console.log(geolocationfinder)
// geolocationfinder.getCurrentPosition;
// console.log(geolocationfinder.getCurrentPosition(showPosition));

// let showPosition = (position) => {

// }



let weatherQuery = (evt) => {
    if (evt.keyCode === 13) {
        getResults(searchbox.value);
        console.log(searchbox.value);
    }
}

const searchbox = document.querySelector('#searchbox');
searchbox.addEventListener('keypress', weatherQuery);

let getResults = (query) => {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}

let displayResults = (weather) => {
    console.log(weather);
    let temptext = document.querySelector('#temp');
    let cityName = document.querySelector('#city');
    let weatherType = document.querySelector('#weatherType');
    let weatherpic = document.querySelector("#weatherpic");
    temptext.innerHTML = `${Math.round(weather.main.temp)}°C`;
    cityName.innerHTML = weather.name;
    weatherType.innerHTML = weather.weather[0].main;
    weatherpic.src = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    

    
    
}


// input email
// generate random key
// sends email with key
// user uses key to access network
// key represents user


