# Health Monitor App

## Introduction

The app allows users to log their health data and receive insights from the OpenAI API.

This README file provides an overview of the Health Monitor App, a React Native project that integrates Firebase Authentication, React Navigation, and the OpenAI API. 

## Prerequisites

- Node.js (version 18 or higher)
- A [Firebase Authentication Service](https://firebase.google.com/docs/auth/web/password-auth) configured
- [Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) (for Linux or macOS users).
- [OpenAI API](https://platform.openai.com/docs/overview) key

## Installation

1. Clone the repository:

    ```
    git clone https://github.com/pixelsomatic/health-monitor-app.git
    ```

2. Access the project folder:
    ```
    cd health-monitor-app
    ```

3. Install dependencies:

    ```
    npm install
    ```

4. In Firebase, connect your app to your [Firebase console](https://console.firebase.google.com), open the **Auth** section and enable the **E-mail/password** method.

5. Replace the `FIREBASE_CONFIG` variables in `.env.local` with your Firebase project configuration.

6. Replace the `OPENAI_API_KEY` variable in `.env.local` with your OpenAI API key.

## Usage

1. Run the app in development mode:

   - Run this command: 
      ```
      npx expo start
      ```
   - Scan the QR code with the [Expo Go](https://docs.expo.dev/get-started/expo-go/) app on your device to run the app. 

2. Run the app in Android or Genymotion emulator:
    
    - Run this command:
      ```
      npm run android
      ``` 
3. Run the app in iOS emulator:
    
    - Run this command:
      ```
      npm run ios
      ``` 

## Features

- Firebase Authentication for user management
- React Navigation for app navigation
- OpenAI API integration for generating insights
- Health data logging and visualization

## License

This project is licensed under the MIT License.

## References

- [OpenAI API](https://platform.openai.com/docs/api-reference)
- [Firebase Authentication](https://firebase.google.com/docs/auth)
- [React Navigation](https://reactnavigation.org/)
- [Expo](https://expo.io/)
