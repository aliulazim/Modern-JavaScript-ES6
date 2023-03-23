// ES6 Fat Arrow Function

// function number() {
//     return 10;
// }

// let number = () => 15;

// function number(n) {
//     return n;
// }

// let number = (n) => n*5;

// console.log(number(5));

// This keyword confution 

/*
let javascript = {
    name: "JavaScript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function () {
        let self = this;
        this.libraries.forEach(function (a) {
            console.log(`${self.name} loves ${a}`);
        });
    },
};

javascript.printLibraries();
*/


// Arrow function

// let javascript = {
//     name: "JavaScript",
//     libraries: ["React", "Angular", "Vue"],
//     printLibraries: function () {
//         this.libraries.forEach(a => console.log(`${this.name} loves ${a}`));
//     },
// };

// javascript.printLibraries();


// Arrow function in Event hendeler


const searchInput = document.querySelector(".search");
const display = document.querySelector(".result");
const thanks = document.querySelector(".thanks");

// Normal Function that works perfectly

function show() {
    display.innerHTML = this.value;
    let self = this;
    setTimeout(function () {
        thanks.innerHTML = `You have typed: ${self.value}`;
    }, 1000);

}
    searchInput.addEventListener("keyup", show)
