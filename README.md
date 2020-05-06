# 🚀 React Native Feature Boilerplate - April 2020

[![React Native](https://img.shields.io/badge/React%20Native-v0.62.2-green.svg)](https://facebook.github.io/react-native/)
[![React Navigation V5](https://img.shields.io/badge/React%20Navigation-v5.1-blue.svg)](https://reactnavigation.org/)

React NativeFeature Boilerplate is a starting point for React Native application. This project is configured with redux, redux saga
and redux persist. Uses latest version of react-navigation (v5)

<p float="left">
<a href='http://redux.js.org'><img src='https://camo.githubusercontent.com/f28b5bc7822f1b7bb28a96d8d09e7d79169248fc/687474703a2f2f692e696d6775722e636f6d2f4a65567164514d2e706e67' height='60' alt='Redux Logo' aria-label='redux.js.org' /></a>
 
<a href='https://redux-saga.js.org/'><img src='https://camo.githubusercontent.com/4354872161943c4ae2ceec2a946dec85b96799b8/68747470733a2f2f72656475782d736167612e6a732e6f72672f6c6f676f2f303830302f52656475782d536167612d4c6f676f2d4c616e6473636170652e706e67' height='60' alt='Redux Logo' aria-label='redux-saga.js.org/' /></a>

<a href='https://callstack.github.io/react-native-paper/'><img src='https://raw.githubusercontent.com/callstack/react-native-paper/master/docs/assets/images/paper-logo.svg?sanitize=true' height='110' alt='Redux Logo' aria-label='https://callstack.github.io/react-native-paper/' /></a>

</p>

## Scalability Factor

This Architecture is optimised for large scale projects. If you are beginner who just started using react native, I would
suggest starting with a type based architecture and slowly switching to this architecture.

[React-Native-BoilerPlate](https://github.com/victorkvarghese/react-native-boilerplate) for beginners.

## Features

- [React Hooks](https://reactjs.org/docs/hooks-intro.html)
- [React Navigation](https://reactnavigation.org/) with [Authentication flow](https://reactnavigation.org/docs/auth-flow) baked in.
- [React Native Gesture Handler](https://github.com/kmagiera/react-native-gesture-handler)
- [React Native Paper](https://callstack.github.io/react-native-paper/)
- [React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)
- [Redux](http://redux.js.org/) with [hooks](https://react-redux.js.org/api/hooks) support
- [Redux Saga](https://redux-saga.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist/)
- [Reselect](https://github.com/reduxjs/reselect)
- [Jest](https://facebook.github.io/jest/)
- [Eslint](http://eslint.org/) ([Airbnb config](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb))

## Prerequisites

- [Node](https://nodejs.org) v10 (it is recommended to install it via [NVM](https://github.com/creationix/nvm))
- [Yarn](https://yarnpkg.com/)
- A development machine set up for React Native by following [these instructions](https://facebook.github.io/react-native/docs/getting-started.html)

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
  - `/navigation` - All naviagtion related stuff including helpers functions and navigation stack
    - `NavigationService.js` - Service class for navigation - can be used without using props
    - `NavigationStack.js` - Stack to define naviagtion. you can split things further if needed
  - `/store` - Includes everything you need to set up store.
    - `reducers` - Combines all feature based reducers
    - `sagas` - Combines all feature based sagas
    - `index.js` - Set ups store and export things

## Getting Started

1. Clone this repo, `git clone https://github.com/victorkvarghese/react-native-boilerplate.git <your project name>`
2. Go to project's root directory, `cd <your project name>`
3. Remove `.git` folder, `rm -rf .git`
4. Use [React Native Rename](https://github.com/junedomingo/react-native-rename) to update project name `$ npx react-native-rename <newName>`
5. Run `yarn` or `npm install` to install dependencies

6) Start the packager with `npm start`
7) Connect a mobile device to your development machine
8) Run the test application:

- On Android:
  - Run `react-native run-android`
- On iOS:
  - Open `ios/YourReactProject.xcworkspace` in Xcode
  - Hit `Run` after selecting the desired device

9. Enjoy!!!

## Contributing

PRs are welcome
