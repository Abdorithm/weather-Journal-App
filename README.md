![A cool banner!](Assets/banner.png "banner")

# Weather Journal App

This project is an asynchronous web app that uses Web API and user data to dynamically update the UI for a Weather-Journal App.

# Table of contents

- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)


# Installation

To use this project, first clone the repo on your device using the command below:<br>
<code>git clone https://github.com/Abdorithm/weather-Journal-App.git</code><br>
Then, the repo will be downloaded on your machine. <br>
<em>You can also download it as a zip file or fork it to your account.</em>

[(Back to top)](#table-of-contents)

# Usage

After installation, you'll be able to navigate through the project folder, the architecture of the project files is:<br>
<pre>
server.js
README.md
website
 js
  - app.js
 css
  - style.css
 index.html
</pre>
You'll need to have <code>node.js</code> installed in your machine in order to setup the server.

[(Back to top)](#table-of-contents)

### How to use?

1. Begin by opening the <code>server.js</code> in your editor.<br>
2. Make sure you have <code>node.js</code> installed by running this command in the terminal
<pre>node --version</pre><br>
3. Install the packages <code>express</code>, <code>body-parser</code> and <code>cors</code> by using the command
<pre> npm install {package_name}</pre><br>
4. Start the server by using the command
<pre>node server.js</pre><br>
5. At this point, you'll be able to open the website in your browser. By entering your zip code, you'll get the current temperature in your area/city.

![display from the app](Assets/capture1.png "banner")

[(Back to top)](#table-of-contents)

# Development

The main idea of this project is to use HTTP routes & requests and Asyncronous JavaScript to get data from an API and use it in the app.<br>

### 1. Setting up the environment. <br>
I made sure <code>node.js</code> is installed from the terminal. Then, installed the packages <code>express</code>, <code>body-parser</code> and <code>cors</code> from the terminal and included them in server.js file.
After that, I created a server running on <code>port = 8000</code> and added a <code>console.log()</code> to the server callback function to test if it's running.

### 2. Server-side GET & POST routes. <br>
I added a GET route that returns the projectData object in the server code. Then, added a POST route that adds incoming data to <code>projectData</code>.

### 3. Acquiring API credentials. <br>
By using the credentials from <em>OpenWeatherMap website</em> and the base url 
<li>I created global variables at the top of <code>app.js</code> code.
<li>Wrote an <code>async</code> function in <code>app.js</code> that uses <code>fetch()</code> to make a GET request to the <em>OpenWeatherMap API</em>.
<li>Created an <code>event listener</code> for the element with the <code>id: generate</code> with a <strong>callback function</strong> to execute when it is clicked, then called the <code>async</code> GET request inside it.

### 4. Client-side chained promises. <br>
Finally, I chained another Promise that gets the API data & makes a POST request to add the API data, as well as data entered by the user, to the app. I also added to it a function that updates the UI based on that data.
<pre>
getWeather(baseURL, data['zipCode'], apiKey)
    .then((info) => {
      // the city name and temperature is obtained from the API
      data['temp'] = info.list[0].main.temp 
      data['cityName'] = info.city.name 
      console.log(data)
      // POST request
      postWeather('/postAll', {temp: data.temp, city:data.cityName, date: data.date, feel:data.feelings})
      //Update the UI
      updateUI()
    })
</pre>

[(Back to top)](#table-of-contents)

