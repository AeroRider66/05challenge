# Challenge 05 Third-party APIs

## Startup
Access web page via URL https://aerorider66.github.io/05challenge/

## Use and Function
This app is designed to provide a Kanban-style task board.  It provides the user with the capability to create a task and see it on a board that allows for the task to moved between 3 areas - To Do, In Progress, and Done.  It will allow the user to input the title, task description, and task due date for each task.

## User Interface
Upon access the user will be provided a page divided into 3 columns, and a button that says 'Add task'.  Once tasks are added to the board, upon load the user will be presented with tasks previously entered.  When the 'Add Task' button is pushed, the user will have a pop-up input box with 3 fields, 'Task Title', 'Due Date' and Task 'Description'.  The 'Due Date' input will contain a calendar modal for ease of date input.  When input is complete, the user will press the button, and the task will be saved and display as a card on the board.  User will be able to move card between columns.  Card color will changed based on amount of time left on task.

## Application Internal Operations

The operation of the code in the app, is centric around only 3 provided parameters, and a single API key URL.
The 2 parameters are the city name provided by the user, and a weather 'container'.
The operation is centric around the input city (user input), the API response from https://openweathermap.org, and the parsing of the information provided by this app.


## Internal Functionality

Upon load of page the user input field is presented to allow input of the target city.  That city name is used to create the required API request for data.  When combined with the developer's API key, a unique URL is created and sent to the API.  The app will wait for a response from the server API.  This response will provide a JSON compliant dataset that contains a large amount of weather information for use.  Once received, the main use goes on to the fetch weather function, but the city name is also passed over to the history functionality.

The fetch weather function creates the API URL, and sends it to the openweather API, then awaits the response.  The response contains the full dataset response, most of which we do not use, but we send the full set on.  The render weather function takes in the full dataset, which contains the weather forecast in 3 hour increments for all 5 days.  It will pick the 1200pm time (Using the getHoursFromUnixTime function) to pick only one time per day.

Once selected the datasets are passed to the renderWeatherItem function, which will pick out the weather type(clear, cloudy, etc.) the temperature, the humidity and the wind-speed. Values are rounded for readability.  Once values are extracted, they will be rendered on the web page in left column (user input, submit button, historical city buttons) or the right column (list of weather by day with icon showing weather type, and values given for temperature, humidity, and wind-speed).


## Repository and Site

### URL
Web page hosted by Github via URL https://aerorider66.github.io/05challenge/

### Repository
Repository location is https://github.com/AeroRider66/05challenge

   

