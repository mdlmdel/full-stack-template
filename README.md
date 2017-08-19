# Senticord Sentiment Analysis

Senticord is a full stack React Redux web application that enables users to search for, add, save, and delete sentiment analysis reports on terms, called entities. The application uses the [IBM Watson AlchemyLanguage API](https://www.ibm.com/watson/developercloud/alchemy-language/api/v1/#authentication) to provide sentiment analysis on those entities as they appear on the home page of Harvard Business Review. Users search for the entity of their choice, and the API returns the results in the form of sentiment score, sentiment type, and date, which timestamps the reports. Users can then save a sentiment analysis report on the entity they searched for and retrieve previously saved reports, which they can evaluate over time to identify trends. 

![senticord](https://cloud.githubusercontent.com/assets/20372858/23835096/886b19f8-0737-11e7-9a49-9a4885fb434e.jpg)

## How the Application was Built

Senticord was built using React, Redux, MongoDB, Express, Node, Axios, and the [IBM Watson AlchemyLanguage API](https://www.ibm.com/watson/developercloud/alchemy-language/api/v1/#authentication). 

## Running the App

Use the deployed version of the app [here](https://senticord.herokuapp.com).

Or, run the application locally: 

1. Download the project, and install the dependencies using 'npm install'.
2. Use a local server to run the application. 
3. Once the server is running, search for entities of your choice, and save and view reports. 

-MdL