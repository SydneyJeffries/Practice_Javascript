// You live in the city of Cartesia where all roads are laid out in a perfect grid.
// You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk.
// The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block in a direction and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). 
//It will never give you an empty array (that's not a walk, that's standing still!).
// my answer: 
function isValidWalk(walk) {
    if( walk.length > 10 || walk.length < 10 ){
    return false }
   let northvalues = walk.filter(nav => nav.match(/n/));
   let southvalues = walk.filter(nav => nav.match(/s/));
   let eastvalues = walk.filter(nav => nav.match(/e/));
   let westvalues = walk.filter(nav => nav.match(/w/));
   if (westvalues.length == eastvalues.length && northvalues.length == southvalues.length) {
      return true;
    }
  }

 //  https://www.codewars.com/kata/consecutive-strings/train/javascript is where i'm bookmarking for now