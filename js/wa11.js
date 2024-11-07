
function tellFortune(varJob, varLocation, varPartner, varKids) {
    var fortune = 'You will be a ' + varJob + ' in ' + varLocation + ' and married to ' +
    varPartner + ' ' + ' with ' + varKids + ' kids.';
    console.log(fortune);
    }

    tellFortune('farmer', 'Missouri', 'Chappell Roan', 'a wonderful lack of');

    tellFortune('marine biologist', 'a sweet coastal cottage', 'Kit Connor', 'a small labor force');
    
    tellFortune('political renegade', 'a cabin in the woods', 'Alex Cosani', '2 diva');



function findDogAge(age) {
    
        var dogYears = 7*age;
        let yourDog = console.log("Your doggie is " + dogYears + " years old in dog years!");
        }
        
        findDogAge(13);
        findDogAge(3);
        findDogAge(0.5);

        if(customName.value !== '') {
            const name = customName.value;
            yourDog = yourDog.replaceAll('Your doggie', name);
          }
        
        console.log()


function reverseReverse(n) {
  n = n + "";
  return n.split("").reverse().join("");
}
 console.log(Number(reverseReverse(32243)));



function alphabetize(str) {
  return str.split('').sort().join('');
}
console.log(alphabetize("webmaster"));


function uppercaseFirst(str) {
  var array = str.split(' ');
  var newarray = [];
  for (var x = 0; x < array.length; x++) {
    newarray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
  }
  return newarray.join(' ');
}
console.log(uppercaseFirst("the quick brown fox")); 