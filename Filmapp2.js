"use strict";

// 1. Ձեր պատկերացումով փոփոխում և օպտիմիզացնում եք filmapp.js - ը, որ կոդը էլ ավելի կարճանա ու էլ ավելի արագ աշխատի


"use strict";

const numberOfFilms = start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: true
};

detectUserPersonalLevel();
rememberMyFilms();
yourFavoriteGenres();
showMyDB();

function start(numberOfFilms) {
	numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));

	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = parseInt(prompt("Քանի՞ ֆիլմ եք դիտել այսօր", ""));
	}

	return numberOfFilms;
}
function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt("Ո՞րն ֆիլմն եք վերջերս դիտել", "");
		const b = prompt("Ինչքա՞ն այդ ֆիլմը կգնահատեիք", "");
	
		if (a != null && b != null && a.trim() != "" && b.trim() != "" && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log("DONE");
		} else {
			console.log("ERROR");
			i--;
		}
	}
}
function detectUserPersonalLevel () {
	if (numberOfFilms < 10) {
		console.log("Դուք նայել եք բավականին քիչ ֆիլմեր");
	} else if (numberOfFilms < 30) {
		console.log("Դուք ֆիլմի սիրահար եք");
	} else if (numberOfFilms >= 30) {
		console.log("Դուք Կինոման եք !!!");
	}
}
function showMyDB () {
	if (personalMovieDB.privat === true) {
		console.log(personalMovieDB);
	} else {
		console.log("Մեր տվյալների բազան փակ է");
	}
}
function yourFavoriteGenres() {
	for (let i = 0; i <= 2; i++) {
		const genres = prompt(`Ձեր նախընտրելի ժանրը ${i + 1}`);

		if (genres.trim() != "" && genres != null && genres.length <= 20) {
			personalMovieDB.genres[i] = genres;
		} else {
			i--;
		}
	}
}


// 2․ ստեղծում եք 20 օրինակ Destructuring - ի, այսինքն 10 հատ զանգված 10 հատ օբջեքթ, կեսը պետք է լինեն ճյուղավորված գոնե 1 աստիճան,
//այսինքն զանգվածի մեջ զանգված, օբջեքթի մեջ օբջեքթ, բայց պետք է լինեն նաև չճյուղավորվածները

const arr = ["Բանան", "Խնձոր", "Ծիրան", "Բալ"];
const [mirg1, mirg2] = arr;
console.log(mirg1, mirg2);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const [firstName, lastName, age] = ['Cherika', 'Merchant', 5];
console.log(firstName);
console.log(lastName);
console.log(age);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const [num1, num2] = [10, 2];
console.log(num1 ** num2);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const arr2 = [1, 2[3, 4], 5, 6, [7, [8, 9, 10]]];
const [x, y, z] = arr2[4][1];
console.log(x, y, x);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

let num1 = 10;
let num2 = 20;
[num1, num2] = [num2, num1];
console.log(num1, num2);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const [lastName = prompt('Նշեք Ձեր ազգանունը'), fName = prompt('Ձեր անունը')] = ["Սարգսյան"];
console.log(fName);
console.log(lastName);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

let num1 = Math.floor(Math.random() * 10);
let num2 = Math.floor(Math.random() * 10);
if (num1 > num2) {
    [num1, num2] = [num2, num1];
}
console.log(num1, num2);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const planets = ["Մերկուրի", "Երկիր", "Վեներա", "Մարս", "Պլուտոն", "Սատուրն"];
const [first, second, ...rest] = ["Մերկուրի", ...planets];
console.log(first);
console.log(second);
console.log(rest);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const nums = [5, [1, 4, 6], 10, 15];
const [x, [y, z, e]] = nums;

console.log(x);
console.log(y);
console.log(e);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

function foo() {
    return [1, 2, 3];
}
const [x, y, z] = foo();

console.log(x);
console.log(y);
console.log(z);

//==========================================================================================
const obj = {
    fName: "Sevak",
    lastName: "Sargsyan"
};

const { fName, lastName } = obj;
console.log(fName, lastName);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const car = {
    model: "Mercedes",
    color: "White",
    maxSpeed: 240,
    models: ["c180", "e500", "c220", "Maybach GLS SUV", "C 300 Coupe"]
};
const { models, maxSpeed } = car;
console.log(models[0], maxSpeed);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const fullStack = {
    frontEnd: ["html", "css", "js", "React "],
    backEnd: "Node",
    databaBase: "MongoDB",
};

const { frontEnd: courseOne, backEnd: courseTwo, databaBase: courseThree } = fullStack;
console.log(courseOne, courseTwo, courseThree);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const footballPlayer = {
    number: 7,
    fullName: 'Cristiano Ronaldo',
    club: {
        clubName: 'Manchester United',
        name: 'MUN',
        address: {
            street: 'FC United of Manchester Broadhurst Park 310 Lightbowne Road Moston Manchester M40 0FJ',
            city: 'Manchester'
        }
    }
};
const { club: { address: { street } } } = footballPlayer;
console.log(street);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

let key = "fName";
let {
    [key]: foo
} = { fName: "John" };

console.log(foo);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --

const person = {
    fName: 'Sevak',
};

const { fName, age = 26 } = person;
console.log(fName);
console.log(age);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const dog = {
    fName: "Jeko",
    owner: "Sevak",
    color: "White",
    age: 1,
};
const { fName, owner } = dog;
console.log(fName);
console.log(owner);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const human = {
    name: 'bobby',
    head: {
        eyes: 'brown',
        ears: 'normal',
        mouth: {
            color: 'red',
            voice: 'loud'
        }
    },
    height: '70',
    twoThumbs: true
};

const { eyes } = human.head;
console.log(eyes);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const user = {
    fName: 'Fred',
    age: 50,
    education: {
        degree: 'Masters'
    }
};
const { education: { degree } } = user;
console.log(degree);

//-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -

const obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5
};
const {
    b,
    d,
    ...restOfObj
} = obj;
console.log(b);
console.log(d);
console.log(restOfObj);