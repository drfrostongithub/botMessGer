## Guide to the BotMessGer

1. Clone the code (git clone https://github.com/drfrostongithub/botMessGer.git)
2. Npm Install
3. There's two way to make the code works (one by Integrating to Messenger Facebook or Test By Console)
4. **\*Integrating to facebook **messenger\*\*
5. setup .env (You will use messenger facebook to setup)
6. Look at the guide bottom to setup page on facebook developer and get the following field
   a. MESSENGER_PAGE_ID=
   b. MESSENGER_ACCESS_TOKEN=
   c. MESSENGER_APP_ID=
   d. MESSENGER_APP_SECRET=
   e. MESSENGER_VERIFY_TOKEN=
   *TLDR (https://chatbotsjournal.com/how-to-build-facebook-messenger-bot-using-node-js-and-bottender-20d87c9e2c77)
   Focus On the 3rd Step
   **More TLDR**
   -> Open Facebook console (https://developers.facebook.com/)
   -> Click my Aps -> Create App -> Enter Your app name -> Create a Fan Page (this is the place you will chat/test the bot)
   -> Get Messenger Access Token + Page ID in the setting Products
   -> Get Messenger App ID + APP Secret on setting basic
   -> For Verify Token, you can use any token e.g: "THIS_IS_STRONG_TOKEN" or use https://strongpasswordgenerator.com/ and paste all the appropiate field to the .env file
   -> Open new terminal => use 'npm run set' to set webhook
7. ***Run locally by 'npm run bot' ->** Testing the code for works
   -> Try to say "hi or hello" on console, the bot will respond once you said something
   -> He/she will ask your name (give your name)
   -> Then ask for birthday date (YYYY-MM-DD)
   -> Then ask if you want to reveal how much until birthday (Yes and no)
   -> He/She will said goodbye
8. run **npm run test** to check the REST API works or not (Get all and Delete)
9. Then for check all the messages go with _npm run dev_ -> open localhost by click on what provided on console (don't forget to go for _localhost:4000/messages_ !
   or you will just stuck in loop)
10. You can check each email by ID or Delete it.
11. That's it folks, remember this is not yet deployed.
12. If you have any question email me at business.putrarezafardani@gmail.com

## My 2 Cent About the business sense

1. Use it as a automatic respond when some help isn't needed with Human Response (e.g: FAQ, More Download Links, Small Error)
2. Can also be interchangeable with human response if the problems was considered complex by the machine and user need it which is will lead to 3rd point
3. User will also give an input on how these messenger will help them in the future or present
4. Developer will gather data on what's needed to be improved and needed to be fixed
5. I'm using some material from the guide that I give at the top, but also the rest are from my experience as a developer

## Look at this guide

https://chatbotsjournal.com/how-to-build-facebook-messenger-bot-using-node-js-and-bottender-20d87c9e2c77




## Below here are Framework README, Not related directly to the step I use !!

This project was bootstrapped with
[Bottender](https://github.com/Yoctol/bottender) init script.

## Sending Feedback

Always feel free to open an issue to
[Bottender](https://github.com/Yoctol/bottender/issues) repository.

## Configuration

### The `bottender.config.js` File

Bottender configuration file. You can use this file to provide settings for the session store and channels.

### The `.env` File

Bottender utilizes the [dotenv](https://www.npmjs.com/package/dotenv) package to load your environment variables when developing your app.

To make the bot work, you must put required environment variables into your `.env` file.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in development mode.<br>
The bot will automatically reload if you make changes to the code.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000) and ngrok runs on [http://localhost:4040](http://localhost:4040).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm run dev -- --console
yarn dev --console
```

### `npm start`

Runs the app in production mode.<br>
By default, server runs on [http://localhost:5000](http://localhost:5000).

To run in [Console Mode](https://bottender.js.org/docs/en/the-basics-console-mode), provide the `--console` option:

```sh
npm start -- --console
yarn start --console
```

### `npm run lint`

Runs the linter rules using [Eslint](https://eslint.org/).

### `npm test`

Runs the test cases using [Jest](https://jestjs.io/).

## Learn More

To learn Bottender, check out the [Bottender documentation](https://bottender.js.org/docs/en/getting-started).

For more examples, see [Bottender examples](https://github.com/Yoctol/bottender/tree/master/examples).
