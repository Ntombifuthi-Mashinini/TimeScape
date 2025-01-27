function updateTime() {
    const cities = [
        {id: 'paris', timezoneOffset: '+02:00' },
        {id: 'sydney', timezoneOffset: '+10:00' },
        {id: 'new-york', timezoneOffset: '-05:00' },
        {id: 'south-africa', timezoneOffset: '+02:00' },
    ];

    cities.forEach((city) => {
        const now = moment();
        const cityTime = now.utcOffset(city.timezoneOffset);

        const formattedDate = cityTime.format('YYYY-MM-DD');
        const formattedTime = cityTime.format('HH:mm:ss');
        const amPm = cityTime.format('A');

        const cityElement = document.getElementById(city.id);
        cityElement.querySelector('.date').textContent = formattedDate;
        cityElement.querySelector('.time').textContent = 'Time: ' + formattedTime;
    });
}

updateTime();
setInterval(updateTime, 1000);