// let weather = {
//     "apiKey":"45bf0d3e0c8b7b3cab463b0525e70400",
//     fetchWeather: function() {
//         fetch("http://api.openweathermap.org/data/2.5/weather?q=basra&units=metric&appid=45bf0d3e0c8b7b3cab463b0525e70400")
//         .then(response => response.json()).then(data => console.log(data));

//     }
// }

let apiKey = "45bf0d3e0c8b7b3cab463b0525e70400";
let searchValue = document.getElementById('#find');
let searchBtn = document.querySelector('.btn');


searchBtn.addEventListener('click', ()=>{
 weather(search());
}) 

function weather(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
    .then(response => response.json())
    .then(data =>{
        console.log(data);
        this.weatherDisplay(data);
    })
}

function weatherDisplay(data){
const {name} = data;
const {icon, description} = data.weather[0];
const {temp, humidity} = data.main;
const {speed} = data.wind;
console.log(name, icon,description,temp,humidity,speed)
document.querySelector('.city').textContent = "Weather in "+ name;
document.querySelector('.discription').textContent = description;
document.querySelector('.wind').textContent = "Wind : " + speed + " km/h";
document.querySelector('.temp').textContent = Math.floor(temp) + " °C ";
document.querySelector('.humidity').textContent = "Humidity : "+ humidity + "%";
document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?"+ name +"')";
}


function search(){
    this.weather(document.querySelector(".search-bar").value);

}

document.querySelector(".search-bar").addEventListener('keyup', (event)=>{
    if(event.key == "Enter"){
        weather(search());
    }
})

onload = ()=>{
    weather('Basra');
}

