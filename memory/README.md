# Memory
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
To install all dependencies required to launch the application.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

# Observations
## Testing
This is the first time in a long time where I tested rendering components, most of the times I am used to testing algorithms and functions. 

7 tests is not that much, but most of the logic is bound to component's states and I am not that experienced on testing React Hooks. I am going to focus more on those in the future.  

## Libraries and Modules
I tried to avoid using too many libraries, the only exceptions are Axios for some quality of life and Material UI's Dialog.

I could have avoided Material UI altogether, but felt that implementing a Dialog from scratch was too inconvenient and not the scope of the project.
  
The remaining libraries are for testing

## Difficulties
I have to admit that figuring out how to implement the game's logic was harder than I thought. Needed some trial and error to get it right, but all in all it was fun.

# Conclusions
If I had more time I would probably focus on testing. I think it's the only real lack thereof. 

Maybe tweak the style a little, add difficulty levels and maybe other image sets to choose from. There is a lot of potential upgrades that do not require too much effort.

On a quick note, I decided not to make a generic Dialog on purpose and kept both Dialog separated.

I would probably test more devices and resolutions if this was not an exercise. The Ipad pro specifically has been fickle in the past, and here it was not an exception.

