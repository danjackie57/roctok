// var number = 0;
// while (number < 7) { console.log('number'); number++ }

// for (var i = 0; i < 7; i++) { console.log('number') }


// var i = 201;
// while (i < 260) { console.log(i); i++ }

// for (var i = 560; i >= 540; i -= 2) { console.log(i) }




// var num = 91;
// while (num > 82) { console.log('num'); num -= 3 }


// var numbers = [46, 745, 457, 43, 463, 62]
// for (var i = 0; i < numbers.length; i++) { var number = numbers[i]; console.log(number) }
// var i = 0;
// while (i < numbers.length) {
//     var number = numbers[i];
//     console.log(number)
//     i++
// }


// var numbers = [46, 745, 457, 43, 463, 62]
// for (var i = 0; i < numbers.length; i += 2) {
//     var number = numbers[i];
//     console.log(number)
// }



// var names = ['iehg', 'jskhdgf', 'sjghdf', 'hsjkdgh'];
// // var i = 0;
// // while (i < names.length) { var name = names[i]; console.log(name); i++ }
// for (var i = 0; i < names.length; i++) {
//     var name1 = names[i];
//     if (name1 == 'sjghdf') { break; }
//     console.log(name1)
// }



var numbers = [46, 145, 257, 43, 623, 62]

var i = 0;
while (i < numbers.length) {
    var num1 = numbers[i];
    if (num1 > 70) { continue; }
    console.log(num1); i++
}

var numbers = [10, 20, 30, 41, 21, 11, 70];

for (var i = 0; i < numbers.length; i += 1) {
    var number = numbers[i];
    if (number > 40) { continue; }
    console.log(number)
}
