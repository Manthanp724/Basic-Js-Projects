
document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "4d405609e096812b0267bd03675dac89";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector('.search input');
    const subButton = document.querySelector('.search button');
    const weaterIcon = document.querySelector('.weather-icon')
  
    async function checkApi(city){
      const response = await fetch(apiUrl + city +`&appid=${apiKey}`);
      const data = await response.json();
    //   console.log(data);
      document.querySelector('.city').innerHTML = data.name;
      document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
      document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
      document.querySelector('.wind').innerHTML = data.wind.speed + "km/hr";

      if(response.status == ''){
        document.querySelector('.err').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
      }else{
        if(data.weather[0].main =="Clouds || Haze"){
            weaterIcon.src = "./images/clouds.png"
            }
            else if(data.weather[0].main =="Clear"){
                weaterIcon.src = "./images/clear.png"    
            }
            else if(data.weather[0].main =="Drizzle"){
                weaterIcon.src = "./images/drizzle.png"
            }
            else if(data.weather[0].main =="Mist"){
                weaterIcon.src = "./images/mist.png"
            }
            else if(data.weather[0].main =="Rain"){
                weaterIcon.src = "./images/rain.png"
            }
            else if(data.weather[0].main =="Snow"){
                weaterIcon.src = "./images/snow.png"
            }
            document.querySelector('.weather').style.display = 'block'
            document.querySelector('.err').style.display = 'none'
      }
    }
    subButton.addEventListener("click" , ()=>{
      checkApi(searchBox.value);
    });
  });

  