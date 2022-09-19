const prompt = require('prompt-sync')({sigint: true});

let combo = prompt("Please enter the color(s) you would like to combine or deconstruct: ")

if (combo === "red blue" || combo ==="blue red"){
    console.log ("Your new color is purple!")
}else if (combo === "red yellow" || combo === "yellow red"){
    console.log ("Your new color is orange!")
}else if (combo === "blue yellow" || combo === "yellow blue"){
    console.log ("Your new color is green!")
}else if (combo === "purple"){
    console.log ("Your colors are red & blue")
}else if (combo === "orange"){
    console.log ("Your colors are red & yellow")
}else if (combo === "green"){
    console.log ("Your colors are blue & yellow")
}else{
    console.log ("Error")
}