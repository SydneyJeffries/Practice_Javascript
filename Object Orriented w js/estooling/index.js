//////////////////////////////// ES6 Tooling //////////
// es6 tooling in browser applications

// transpiler: translator + compiler 
// transpiler  converts modern js code into code all browsers can understand
/// Babel is a very popular JS transpiler -- it converts all es6 code into es5

//  Bundler : combines all our js files into a single js file which is known as the bundle. 
// WebPack is the most popular js bundler -- it combines all our files and minifies the code by getting rid of white space and comments
// it will also "uglify" our code which means it will shorten the name of our identifiers like classes , functions, objects and so forth


///////////////// Babel /////////
// installing babel from node: 
// from command prompt find your project folder 
// npm init -- yes  /// installs package.jason
// npm i babel-cli babel-core babel-preset-env --save-dev
// ^^ --save-dev makes sure that these installs  are only being used for development (vrs being shipped out with the final product and consquently making the final products file larger)
// we create a build folder where babel will export it's results to 
//go to package.jason add a new script that will be used in the terminal with npm when we are ready to run babel
// we called it babel :  "babel --presets env index.js -o build/index.js"
// from the terminal in our estooling file ( the file that holds our package) ...
// we type: npm run babel
// our code gets compiled and it's stored in build/index.js



const x = 1; 





/////////////// Web Pack ///////
// to install webpack :
//at the webpack-demo cd
// npm i -g webpack-cli

// at the webpack-demo cd type..
// webpack-cli init
// // it will ask a bunch of questions 
// it will ask which module will be the first to enter the application and suggests ./src/index to be the first one... 
// so we will create a fodler called src and move our javascript files into that folder...
// answer that question with ./src/index
// which folder will your generated bundles be in? (press enter for this question bc enter accepts the default)
// will you be using es2015?  yes
// ^^ this automaticly installs babel to transpile code , so we don't have to install all those babel packages we did from before
// will you be using any of the css solutions? arrow key to your correct answer. 
// once these questions are answered it will install and you will get a webpack.config.js file inside the directory. 

// now we have to create a package.jason
// from the terminal in the same project folder ...
// npm init --yes
// a package.jason file will be added to your project folder. 
// from the script section of our package.jason we will add a new command...
// "build": "webpack",

//// how to bundle our application 
/// we are going to  use the command that we created in the package.jason on the terminal 
// from the project folder in the terminal...
// npm run build 
// when it's done executing there will be an added dist folder, inside the dist folder a js file
// update the <script> element in index.html to new bundled js file.


// make it to where webpack automaticly updates:
// web pack will watch for updates and regenerate the bundle whenever we make changes. 
/// go back to your package .jason
// change build command to "webpack-w"
// run the build command to get that started 