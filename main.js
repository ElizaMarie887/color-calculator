const prompt = require('prompt-sync')({sigint: true});

let combo = (prompt("Would you like to combine or deconstruct color? "))

let combine  = "combine"
let deconstruct = "deconstruct"
let color1 = "color1"
let color2 = "color2"
let color3 = "color3"

if(combo === combine){
    color1 = prompt("Enter your first color: ")
    color2 = prompt("Enter your second color: ")
}

if(combo === deconstruct){
    color3 = prompt("Enter your color to deconstruct: ")
}

if(color1 === "red" && color2 === "blue"){
    console.log("Your new color is purple!")
}else if(color1 === "blue" && color2 === "red"){
    console.log("Your new color is purple!")
}else if (color1 === "red" && color2 === "yellow"){
    console.log ("Your new color is orange!")
}else if (color1 === "yellow" && color2 === "red"){
    console.log ("Your new color is orange!")
}else if (color1 === "blue" && color2 === "yellow"){
    console.log ("Your new color is green!")
}else if (color1 === "yellow" && color2 === "blue"){
    console.log ("Your new color is green!")
}else if (color3 === "purple"){
    console.log ("Your new colors are red and blue")
}else if (color3 === "orange"){
    console.log ("Your new colors are red and yellow!")
}else if (color3 === "green"){
    console.log ("Your new colors are blue and yellow!")
}else{
    console.log ("Error!!!")
}