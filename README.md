# PickyEater

![commit](https://img.shields.io/github/commit-activity/m/krupa15/PickyEater)
![Issues](https://img.shields.io/github/issues/krupa15/PickyEater)
![Fork](https://img.shields.io/github/forks/krupa15/PickyEater?style=social)
![Watch](https://img.shields.io/github/watchers/krupa15/PickyEater?style=social)


## Table of Contents
- [📗 About this Application](#📗-about-this-application)
- [🏗 Introduction](#🏗-introduction)
    - [Why?](#why)
    - [Intended Audience](#intended-audience)
- [🏆 Features](#🏆-features)
- [🎨 User Interface and design](#🎨-user-interface-and-design)
- [📊 Data source](#📊-data-source)
- [📦 Getting started](#📦-getting-started)
    - [Installation Instructions](#installation-instruction)
    - [Troubleshooting](#troubleshooting-with-dependencies-and-version)
    - [Run Application](#run-application)
- [🚀 References](#🚀-references)
- [Future Ideas](#future-ideas)
- [How to Contribute](#how-to-contribute)
    - [Manifest](#manifest)
- [Contact Information](#contact-information)
- [©️ Copyright Information](#©️-copyright-information)
<p>&nbsp;</p>
<p>&nbsp;</p>

## 📗 About this Application
<p>&nbsp;</p>

![PickyEater - A React Native App](https://github.com/krupa15/PickyEater/blob/master/UserInterface/Doc%20Images/Intro.jpg)
<p>&nbsp;</p>

*A healthy diet helps to protect against malnutrition in all its forms, as well as non-communicable diseases (NCDs), including diabetes, heart disease, stroke, and cancer. An unhealthy diet and lack of physical activity are leading global risks to health. Nowadays, people are consuming foods with high fat, calories, sodium and many of them do not have enough fruits, vegetables, and other dietary fiber such as whole-grain* - World Health Organization(WHO)
<p>&nbsp;</p>

>The food you eat can be either the safest and most powerful form of medicine or the slowest form of Poison. - Ann Wigmore
<p>&nbsp;</p>

This application is implemented in React Native (build with expo and Redux). It is designed for both iOS and Android as it is cross-platform application. Apart from this high fidelity mockups are designed in AdobeXD.
<p>&nbsp;</p>


## 🏗 Introduction
### Why?
The key objective of this application is to raise awareness about how many calories and nutrients are contained by dish. So that one can maintain a healthy diet while simultaneously satisfying cravings for tasty foods. People who cook for themselves may be perplexed sometimes as to how to prepare something different. At some stage, you may become bored with the same old recipes and flavors. So that people can search by item name and get a list of possibilities with nutritional information and the entire recipe for that dish.
Apart from this, best way to learn any concept is to implement it in real life. So, to use my basic practical knowledge about React-native from academics, I have decided to implement this project. This project is also a part of my curriculum.

### Intended Audience
This application is for anyone who is worried about their health and diet in their everyday lives. Also, for individuals who are weary of the same old recipes and flavours and want to try something new while maintaining their health, this app allows them to search among over 2 million dishes, which is a significant quantity.
<p>&nbsp;</p>

## 🏆 Features
- Splash Screen
- Search over 2 million+ recipes
- Can use any keword for search such as apple, salad, soup, cookies, low calories, vegetarian and so on
- Get health labels like vegan, peanut-free, Egg-free, Sesame Free and so on
- Get details about nutrition 
- Get list of ingredients 
- Get a full recipe of a dish
- Get a type such as dessert, soup, salad and so on
<p>&nbsp;</p>

## 🎨 User Interface and design
- AdobeXD file for high fidelity mockup is in ```./UserInterface/PickyEater.xd```
- Source file for logo is in ```./UserInterface/Logo.ai```
<p>&nbsp;</p>

## 📊 Data source
Data used in whole applcation comes from [API](https://api.edamam.com/).
<p>&nbsp;</p>

## 📦 Getting started

## Installation Instruction

First you should install latest version of [node.js](https://nodejs.org/en/download/) as per your operating environment.
### Clone the Application
```
git@github.com:krupa15/PickyEater.git
```
Or you can use below link also:
```
https://github.com/krupa15/PickyEater
cd PickyEater
```

### Installing Dependencis  
```
npm install -g expo-cli
```

### Other downloads
Top Navigation Bar
```
npm install @react-navigation/material-top-tabs react-native-tab-view
expo install react-native-pager-view
```
Table Component
```
npm install react-native-table-component
```
Redux
```
npm install redux
```
expo-linking (Give a web link to button)
```
expo install expo-linking
```
axios (HTTP client for the browser and node.js - used to call API in this project)
```
npm install axios
```

## Troubleshooting with dependencies and version
```
expo doctor --fix-dependencies
```
## Run Application
```
expo start
```
After ```expo start``` run it on browser with localhost server. You will see screen on browser as below. On bottom left corner there are three options Tunnel, LAN and local. Default option is LAN but to run an application we need to switch to Tunnel mode. After successful connection of tunnel scan the QR code to run it on your device.
<p>&nbsp;</p>

![Localhost Server Image](https://github.com/krupa15/PickyEater/blob/master/UserInterface/Doc%20Images/Tunnel.PNG)
<p>&nbsp;</p>

## Screenshots of User Interface 

## 🚀 References
- [Geeting Started With React Native](https://reactnative.dev/docs/getting-started)
- [Getting Started with Redux](https://redux.js.org/introduction/getting-started)
- [Table Component](https://www.npmjs.com/package/react-native-table-component)

<p>&nbsp;</p>

## Future Ideas
- Implementation of share button to share any recipe
- Implement login and signup functionalities to add recipes to wishlist 
- User can upload their own recipes which should be verified by admin first
- Recommandation based on previous search
- Provide like and comments section in each recipes so that users can like and comment each other's recipe
- Open forum to ask general question 
<p>&nbsp;</p>

## How to Contribute
This is a free and open-sourcesource initiative. Anyone can make a contribution based on future ideas. If there are any suggestions that are not included in future ideas, they can be made. Also, if the future ideas presented are not applicable to this application and are not beneficial to the user, one can make a proposal. If you want to help with development, you can look at the manifest of files listed below to get an understanding of what each file is about.

### Manifest

- README.md ---> This markdown file which you are currently reading with all relevant description related to application 
- App.js    ---> Main file from where execution starts
- components ---> Folder which contains all screens of application, components and images
    - SplashScreen.js ---> A splash screen for 6 seconds which helps to load data
    - HomeScreen.js ---> First screen from where you can search about any recipe
    - DetailScreen.js ---> Screen with all health label, nutririon facts and ingredients
    - SearchComponent ---> It is the top bar in every screens for search by keywords
    - HealthLabels.js ---> Component for health label in DetailScreen.js
    - Nutririons.js ---> Component for health label in DetailScreen.js
    - Ingredients.js ---> Component for health label in DetailScreen.js
    - listItem.js ---> To bind data in flatlit in HomeScreen.js
    - img ---> folder which contains images used in application
- store ---> Folder which contains files to store and pass data between screens
    - storeAction.js ---> to store changed values
    - storeReducer.js ---> to store state changes
<p>&nbsp;</p>

## Issues and Bugs
You can find bugs, enhancements and issues in Issues section of this repository
<p>&nbsp;</p>

## Contact Information
[Portfolio](http://www.krupa.wolknetz.com/) | [Github](https://github.com/krupa15) | [Behance](https://www.behance.net/krupapatel99)

Connect with me : [LinkedIn](https://www.linkedin.com/in/krupa-patel-wd/) 

Email : krupa94272@gmail.com
<p>&nbsp;</p>

## ©️ Copyright Information
This is a free and open source project. Anyone can use it or anyone can contribute in it.
#### PS 🤗
This project is part of my portfolio and academics. So, any feedback will be appreciated which helps me to improve my technical skills as well as to grow it as a business idea. Thank you for your valuable time. ❤️