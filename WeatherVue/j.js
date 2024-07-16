const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '19a29e5037msh7c8628749044946p167d85jsn3b17dbe169dc',
        'x-rapidapi-host': 'apjoy-weather-forecast.p.rapidapi.com'
    }
};

const fetchWeather = (city) => {
    document.getElementById('cityname').innerHTML = city;

    fetch(`https://apjoy-weather-forecast.p.rapidapi.com/forecast?location=${city}&days=5`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response);

            const hi = response.list[0];
            const hi1 = response.list[1];
            const hi2 = response.list[2];
            const hi3 = response.list[3];
            const hi4 = response.list[4];
            const temp=hi.main.temp_min;
            document.getElementById('temp').innerHTML = hi.main.temp;
            document.getElementById('wmain').innerHTML = hi.weather[0].main;
            document.getElementById('icon').innerHTML = `<img src="icons/${hi.weather[0].icon}.png"/>`;
            document.getElementById('wind').innerHTML = hi.wind.speed;
            document.getElementById('pressure').innerHTML = hi.main.pressure;
            document.getElementById('max_t').innerHTML = hi.main.temp_max;
            document.getElementById('min_tt').innerHTML = temp;
            document.getElementById('min_tt').innerHTML = temp;
            document.getElementById('Humidity').innerHTML = hi.main.humidity;
            document.getElementById('description').innerHTML = hi.weather[0].description;

            document.getElementById('dayi').innerHTML = hi1.main.temp_max;
            document.getElementById('day1d').innerHTML = hi1.weather[0].description;
            document.getElementById('day1image').innerHTML = `<img width="25px" height="25px" src="icons/${hi1.weather[0].icon}.png"/>`;

            document.getElementById('day2').innerHTML = hi2.main.temp_max;
            document.getElementById('day2d').innerHTML = hi2.weather[0].description;
            document.getElementById('day2image').innerHTML = `<img width="25px" height="25px" src="icons/${hi2.weather[0].icon}.png"/>`;

            document.getElementById('day3').innerHTML = hi3.main.temp_max;
            document.getElementById('day3d').innerHTML = hi3.weather[0].description;
            document.getElementById('day3image').innerHTML = `<img width="25px" height="30px" src="icons/${hi3.weather[0].icon}.png"/>`;

            document.getElementById('day4').innerHTML = hi4.main.temp_max;
            document.getElementById('day4d').innerHTML = hi4.weather[0].description;
            document.getElementById('day4image').innerHTML = `<img width="25px" height="25px" src="icons/${hi4.weather[0].icon}.png"/>`;
        t1.innerHTML = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()];
        t2.innerHTML = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()+1];
        t3.innerHTML = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()+2];
        t4.innerHTML = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()+3];
        t5.innerHTML = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][new Date().getDay()+4];
        m1.innerHTML=new Date().toLocaleString('default', { month: 'long' });
const dday2=new Date().getDate();
        one.innerHTML=dday2;
        const nextDate = new Date();
        nextDate.setDate(dday2+ 1);
        ss.innerHTML=(nextDate.getDate());
        nextDate.setDate(dday2+ 3);
        sss.innerHTML=(nextDate.getDate());
        nextDate.setDate(dday2+ 4);
        ssss.innerHTML=(nextDate.getDate());
        nextDate.setDate(dday2+ 5);
        s5.innerHTML=(nextDate.getDate());

        
        })
        .catch(err => console.error(err));
};
document.getElementById('submit').addEventListener("click", (t) => {
    t.preventDefault();
    const city = document.getElementById('city').value;
    console.log(city);
    fetchWeather(city);
});

// Initialize with default city
fetchWeather("Delhi");
