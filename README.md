🚀 React Native Feature Based Boilerplate - January 2019
==========================================================

Feature based Architecture for developing Scalable React Native Apps (0.58.3)


[![React Native](https://img.shields.io/badge/React%20Native-v0.58.3-blue.svg)](https://facebook.github.io/react-native/)
[![React Navigation V2](https://img.shields.io/badge/React%20Navigation-v3.1-blue.svg)](https://reactnavigation.org/)


React Native Boilerplate is a starting point for React Native application. This project is configured with redux, redux saga 
and redux persist. Latest version of react-navigation (v2.18) with NavigationService instead of Redux Integration.


## Scalability Factor

This Architecture is optimised for large scale projects. If you are beginner who just started using react native, I would 
suggest starting with a type based architecture and slowly switching to this architecture. 

[React-Native-BoilerPlate](https://github.com/victorkvarghese/react-native-boilerplate) for beginners.



## Features

* [Redux](http://redux.js.org/)
* [Redux Saga](https://redux-saga.js.org/)
* [Redux Persist](https://github.com/rt2zz/redux-persist/)
* [Redux Logger](https://github.com/LogRocket/redux-logger/)
* [React Navigation](https://reactnavigation.org/)
* [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler) 
* [Reselect](https://github.com/reduxjs/reselect)
* [Jest](https://facebook.github.io/jest/)
* [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Project Structure

- `/app` - Contains our React Native App codebase
  - `/api` - Api module class. Each file will be feature based like ProductAPI, LoginAPI etc
  - `/components` - universal shared components used by others.
  - `/config` - Universal styles,images,metrics etc..
  - `/features` - Config files
    - `login`- Each folder will be a feature like this.
      - `reducers` - Reducer associated with this feature [Mostly one, can be multiple]
      - `sagas` - Sagas related with this particular feature [can have single or muliple sagas associated]
      - `selectors` - selectors associated with feature
      - `components` - Components associated with this feature.
      - `containers` - Containers associated with this feature [**Container - Component Structure**]
  - `/lib` - lib helper files
  - `/navigation` - All naviagtion related studd including helpers functions and navigation stack
    - `NavigationHelpers.js` -  Use this class instead of depending on props.naviagtion
    - `NavigationService.js` - Service class for naviagtion
    - `NavigationStack.js` - Stack to define naviagtion. you can split things further if needed
  - `/store` - Includes everything you need to set up store. 
    - `reducers` - Combines all feature based reducers
    - `sagas` - Combines all feature based sagas
    - `index.js` - Set ups store and export things
 



## Prerequisites

* [Node](https://nodejs.org) v8.10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
* [Yarn](https://yarnpkg.com/)
* A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

## Getting Started

1. Clone this repo, `git clone https://github.com/victorkvarghese/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder,  `rm -rf .git`
4. Open `package.json` and change the `name` property with your project name
5. Open `index.js` and replace `'ReactNativeBoilerPlate'` by your project name
6. Open `app.json` and replace `'ReactNativeBoilerPlate'` by your project name 

7. Run `yarn` or `npm install` to install dependencies

8. Run `react-native upgrade` to upgrade and add iOS & Android Folders.
  
9. Run `react-native link`


10. Start the packager with `npm start`
11. Connect a mobile device to your development machine
12. Run the test application:
  * On Android:
    * Run `react-native run-android`
  * On iOS:
    * Open `ios/YourReactProject.xcodeproj` in Xcode
    * Hit `Run` after selecting the desired device
13. Enjoy!!!


## Contributing

This is Work in Progress [WIP]. I would love to see some PRs and suggestions from everyone Lets make this boilerplate more 
efficient and developer friendly.
