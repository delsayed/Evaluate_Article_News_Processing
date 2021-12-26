 # Project Introduction - What You Will Build
We will build a web tool that allows users to run Natural Language Processing (NLP) on articles or blogs found on other websites. NLP is the ability of an application to understand the human language, written or oral.

You don't have to worry about NLP, because we will make use of an external api called Aylien to interact with their NLP system. This tool will help us classify the information available in the article, like whether the content is subjective (opinion) or objective (fact-based) and whether it is positive, neutral, or negative in tone.

# Following are the project prerequisites:

Webserver - Node
Web application framework for routing - Express
Build tool - Webpack. Using webpack, we will set up the app to have dev and prod environments, each with their own set of tools and commands.
External script - Service Worker
External API - Aylien
Introduction to Natural Language Processing
NLP is a subset of AI that provides computers ability to process or interact with natural human speech. In NLP, machine learning and deep learning are used on massive amounts of data to obtain the rules and understanding of nuance in human speech.

# NLP on Human Voice
For example, everyone who has used Alexa or Google Assistant or other voice command systems knows that these devices are always improving, by collecting and interpreting voice data. Verbal interactions can be incredibly hard to decipher. Sarcasm, for instance, requires understanding not just words and grammar but the tone as well, and regional accents and ways of saying things have to be taken into account, not to mention coverage for all the major languages.

## Development 
The website is developed using javascript and html and is using webpack,webpack loaders and plugins, SASS, Service workers and API
from MeaningCloud
https://api.meaningcloud.com/deepcategorization-1.0

To get started developing :

* All project dependencies ahould be installed using `npm install`
* The server should be started using `npm run start`
* Use npm to install the dotenv package - npm install dotenv This will allow us to use environment variables we set in a new file
* Install Jest by using npm install --save-dev jest
* Both development and production configurations are available 'npm run build-dev' \'npm run build-prod'

## Other Installations
The project required other installation such as....
* dotenv 
* express
* body-parser
* jest
* other dependencies are also required that are included in the package.json file

## Dealing with the API

The Meaning cloud API is the one used in this project to make the required NLP on the url typed by the user.
An API is registered in the .env file. 
the API is free to use up to 1000 requests per day.

## Author:
The author is me Doaa Elsayed, a student in the Egyptfwd initiative.
