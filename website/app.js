// Personal API Key for OpenWeatherMap API
const apiKey = '&appid=a268ca71f2a8feddd8bc3ec3a704155b&units=metric';
let baseURL = 'http://api.openweathermap.org/data/2.5/forecast?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Function called by event listener
const performAction = () => {

    const zipCodeElement = document.getElementById('zip');
    const feelingsElement = document.getElementById('feelings');

    let data = {
        zipCode: zipCodeElement.value,
        feelings: feelingsElement.value,
        date: newDate
    }

    getWeather(baseURL, data['zipCode'], apiKey)
    .then((info) => {

      // the city name and temperature is obtained from the API
      data['temp'] = info.list[0].main.temp 
      data['cityName'] = info.city.name 
      console.log(data)
      // POST request
      postWeather('/postAll', {temp: data.temp, city:data.cityName, date: data.date, feel:data.feelings}) 
      // Update the UI
      updateUI()

    })
    
}

/* Function to GET Web API Data*/
const getWeather = async (url, zip, key) => {

    const res = await fetch (url+zip+key);
    try {
        const info = await res.json();
        console.log(info);
        
        // Alert error message if city isn't found
        if (info.cod != 200) { alert(info.message); }
        return info  
    } 
    catch(err) {
        console.log('ERROR', err);
    }

} 

/* Function to POST data */
const postWeather = async ( url = '', data = {}) => {

    const response = await fetch(url, {
      method: 'POST', 
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data), // body data type must match "Content-Type" header        
    });
    try {
      const newData = await response.json();
      console.log(newData);
      return newData
    }
    catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }

}

/* Function to Update UI */
const updateUI = async () => {

    const request = await fetch('/all');
    try {
      const allData = await request.json();
      document.getElementById('date').innerHTML = "Today's date is "+allData.date;
      document.getElementById('temp').innerHTML = "Temperature in "+allData.city+' is currently '+allData.temp +' °C';
      document.getElementById('content').innerHTML = "Your feelings: "+allData.feel;
    }
    catch(error) {
      console.log("error", error);
    }

}

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);


