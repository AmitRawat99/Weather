let API = 'f0a279b9184257dea8a41a871828d08b'
let ApiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q='

let searchinput = document.querySelector('.search input');
let searchbtn = document.querySelector('.search button');

let weatherIcon = document.querySelector('.weather-icon')

async function checkWeather(city) {
    let response = await fetch(ApiUrl +  city + `&appid=${API}`)
    let data =  await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.tem').innerHTML = Math.round( data.main.temp ) + '°c';
    document.querySelector('.humitry').innerHTML = data.main.humidity + '%';
    document.querySelector('.wind').innerHTML = data.wind.speed + 'Km/h';

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src = "assets/Clouds.png"
    }
    else if(data.weather[0].main == 'Rain'){
        weatherIcon.src = "assets/rain.png"
    }
    else if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = "assets/drizzle.png"
    }
    else if(data.weather[0].main == 'Mist'){
        weatherIcon.src = "assets/mist.png"
    }
}

searchbtn.addEventListener('click',function(){
    checkWeather(searchinput.value);
})