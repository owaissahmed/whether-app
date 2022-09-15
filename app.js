function abc() {
    var input = document.getElementById("inputname")
    var data;

    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=ddd4fe361bc98bd7ee7bdf83fd4da229&units=metric`
    )
        .then((res) => res.json())
        .then((res) => {
            data = res
            setTimeout(() => {
                if (data.cod === 200) {
                    var city = document.getElementById("update")
                    city.innerHTML = `<h1 id="rain1">Current Weather Of ${(data.name)}</h1> <br>  <h3 id="rain2">Weather Description : ${data.weather[0].description}</h3>
                <br> <h3 id="rainy">Temperature : ${data.main.temp}</h3>
                <br><h3 id="rain">Feels Like : ${data.main.feels_like}</h3>
                <br><h3 id="rain3">Humidity : ${data.main.humidity}</h3>`

                    input.value = ""
                    var bg = document.getElementById("bg")
                    var rainy1 = document.getElementById("rainy")
                    var rainy2 = document.getElementById("rain")
                    var rainy3 = document.getElementById("rain1")
                    var rainy4 = document.getElementById("rain2")
                    var rainy5 = document.getElementById("rain3")
                    if (data.weather[0].description === "haze") {
                        bg.style.backgroundImage = "url('./img/haze.gif')";
                    } else if
                        (data.weather[0].description === "smoke") {
                        bg.style.backgroundImage = "url('./img/smoke.gif')";
                    }
                    else if
                        (data.weather[0].description === "light rain") {
                        bg.style.backgroundImage = "url('./img/rain.gif')";
                        rainy1.style.color = "white"
                        rainy2.style.color = "white"
                        rainy3.style.color = "white"
                        rainy4.style.color = "white"
                        rainy5.style.color = "white"
                    }
                    else if (data.weather[0].description === "drizzle") {
                        bg.style.backgroundImage = "url('./img/rain.gif')";
                        rainy1.style.color = "white"
                        rainy2.style.color = "white"
                        rainy3.style.color = "white"
                        rainy4.style.color = "white"
                        rainy5.style.color = "white"
                    }
                    else {
                        bg.style.backgroundImage = "url('./img/cloud.gif')";
                    }
                    console.log(data.name)
                    console.log(data.weather[0].description)
                    console.log(data.main.temp)
                    console.log(data.main.feels_like)
                    console.log(data.main.humidity)
                    console.log(data.cod)
                } else {
                    var city = document.getElementById("update")
                    city.innerHTML = `<h1> ${("City Not Found")}</h1>`
                    input.value = ""
                }
            }, 700)
        }
        )
        .catch((err) => {
            console.log("Error", err);
        })



}