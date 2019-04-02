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



const x = 1; 

