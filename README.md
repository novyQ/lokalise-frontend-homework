# Lokalise frontend homework

Hello and welcome!

Your task is to build a simple view that displays a grid of cards by following the [design from Figma](https://www.figma.com/file/Nu7oNij2I39UNDescYqhLU/Test-project-for-a-frontend-developer?node-id=1755%3A2). The view contains a list of glossary terms which can be fetched from `http://localhost:5000/api/glossary/`. The endpoint supports `search` get parameter which can be used for searching the glossary terms. The server can be started by running `npm run start:server`. There are a few hard requirements that allow us to check the correctness of your solution. Other than that you're free to pick the approach and the tech stack you like for this task. For your convenience this repository already contains Create React App with Redux template.

## Functionality

User can search glossary terms by entering text inside search field.

Glossary terms should contain:

- title
- description
- tags
- date when a term was created
- name of a user who created a term

## Design

Design in Figma - https://www.figma.com/file/Nu7oNij2I39UNDescYqhLU/Test-project-for-a-frontend-developer?node-id=1755%3A2. You can get a “developer view” by logging into the Figma with your Gmail or personal account.

## Acceptance criteria

- TypeScript is used
- React is used as the main library for development
- Design is implemented right and is precise
- View is fully responsive
- Correct HTML tags are used
- Reusable components are used
- Code is covered with tests (at least some examples)
- Code meets some popular ESLint standards (e.g. https://www.npmjs.com/package/eslint-config-airbnb).
- Code works in latest Chrome, Firefox and Safari

## Some pointers

Feel free to use any CSS approach, however if you can't choose, then know that at Lokalise we use [Styled components](https://styled-components.com/). It is not required to use Redux, however Redux Toolkit is there if you need it and [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) could be quite handy for fetching and caching API data.

## Development

You have one week (7 calendar days) to submit the task. Please notify us if you need more time to complete the task.

## Submission

Please create a Github/Bitbucket private repository and push your code there. Please invite alexey.malihin@lokalise.com to this repository.

**Have fun!**

![DeepinScreenshot_select-area_20210701104932](https://user-images.githubusercontent.com/74536758/124093729-cadb0900-da60-11eb-9c32-f775d08186f3.png)

# Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run start:server`

Starts Node server on port `5000`.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
