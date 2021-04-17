## Guide to the BotMessGer 
1. Clone the code (git clone https://github.com/drfrostongithub/botMessGer.git)
2. Npm Install 
3. There's two way to make the code works (one by Integrating to Messenger Facebook or Test By Console) 
4. ***Integrating to facebook **messenger**
5. setup .env (You will use messenger facebook to setup)
6. Look at the guide bottom to setup page on facebook developer and get the following field 
    a. MESSENGER_PAGE_ID=
    b. MESSENGER_ACCESS_TOKEN=
    c. MESSENGER_APP_ID=
    d. MESSENGER_APP_SECRET=
    e. MESSENGER_VERIFY_TOKEN=
    *TLDR (https://chatbotsjournal.com/how-to-build-facebook-messenger-bot-using-node-js-and-bottender-20d87c9e2c77)
    Focus On the 3rd Step
7. ***Run locally by '*npm run bot*' ->** Testing the code for works 
8. Then for check all the messages go with *npm run dev* -> open localhost by click on what provided on console (don't forget to go for *localhost:4000/messages* ! 
or you will just stuck in loop)
9. You can check each email by ID or Delete it.
10. That's it folks, remember this is not yet deployed. 
11. If you have any question email me at business.putrarezafardani@gmail.com




## Look at this guide 
https://chatbotsjournal.com/how-to-build-facebook-messenger-bot-using-node-js-and-bottender-20d87c9e2c77

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
