## LinkedIn Re-implementation
Developed with React, Material UI, Redux and NoSQL cloud-based storage.

![HomeGif](https://github.com/MDbrosev/LinkedIn/blob/master/src/images/LinkedIn.gif)

<br />

![Login page](https://raw.githubusercontent.com/MDbrosev/linkedin/master/src/images/loginRegister.PNG?token=AFPQ6R2LNNA3NCEKUVM2ME3BVPMDO)

<br />

![Home page](https://raw.githubusercontent.com/MDbrosev/linkedin/master/src/images/homepage.PNG?token=AFPQ6R64US3RRJDQY5YHXPLBVPMDM)


## Setup

1. Run `npm yarn` to install dependencies.
2. Rename `firebaseExample.js` to `firebase.js` file in src.
3. Add your web app's Firebase configuration from project settings.
4. Run `yarn start`

## Deployment

### Initialization
1. Run `firebase login`
2. Run `firebase init`
3. Select `Hosting`
4. Select `Use an existing project` and select your firebase project.
5. What do you want to use as your public directory? `Build`
6. Configure as a single page app? `Yes`

### Deploy
1. Run `npm run build`
2. Run `firebase deploy`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!


### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.
