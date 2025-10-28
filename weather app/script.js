function fetchWeather() {
    let searchInput = document.getElementById("search").ariaValueMax;
    const weatherDataSection = document.getElementById("weather-data");
    const apiKey = "REPLACE WITH YOUR API KEY";
}

if (searchInput == "") {
    weatherDataSection.innerHTML = `
    <div>
        <h2>Empty Input!</h2>
        <p>Please try again with a valid <u>city name</u>.</p>
    </div>
    `;
    return;
}