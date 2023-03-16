
const arr = [
{ name: "Albert", surname: "Einstein", born: 1879, dead: 1955, id: 1 }, 
{ name: "Isaac", surname: "Newton", born: 1643, dead: 1727, id: 2 },
{ name: "Galileo", surname: "Galilei", born: 1564, dead: 1642, id: 3 },
{ name: "Marie", surname: "Curie", born: 1867, dead: 1934, id: 4 },
{ name: "Pierre", surname: "Curie", born: 1859, dead: 1906, id: 5 },
{ name: "Johannes", surname: "Kepler", born: 1571, dead: 1630, id: 6 },
{ name: "Nicolaus", surname: "Copernicus", born: 1473, dead: 1543, id: 7 },
{ name: "Max", surname: "Planck", born: 1858, dead: 1947, id: 8 },
{ name: "Katherine", surname: "Blodgett", born: 1898, dead: 1979, id: 9 },
{ name: "Ada", surname: "Lovelace", born: 1815, dead: 1852, id: 10 },
{ name: "Sarah E.", surname: "Goode", born: 1855, dead: 1905, id: 11 },
{ name: "Lise", surname: "Meitner", born: 1878, dead: 1968, id: 12 },
{ name: "Hanna", surname: "Hammarström", born: 1829, dead: 1909, id: 13 }
];

// - Получить массив ученых, родившихся в 19 веке.
const bornYear = arr.filter(arr => arr.born >= 1800);
console.log(bornYear);

// - Найти общую сумму лет, сколько прожили все ученые.
const sumYear = arr
    .map(arr => arr.dead - arr.born)
    .reduce((acc, arr) => {
        return acc + arr;
    }, 0)
console.log(sumYear);

// - Отсортировать ученых по алфавиту.
const nameAlf = arr.sort((first, second) => first.surname.localeCompare(second.surname));
console.log(nameAlf);

// - Отсортировать ученых по количеству прожитых лет.
for (item of arr) {
    item.live = item.dead - item.born;
}
arr.sort((a, b) => a.live - b.live);

console.log(arr);

// - Найти ученого, который прожил больше всех и ученого, который меньше.
console.log(`ученый, который прожил меньше всех это ${arr[0].surname}, который прожил ${arr[0].live}, 
а больше всх прожил ${arr[arr.length - 1].surname}, который умер в возрасте ${arr[arr.length - 1].live} лет`);

// - Найти ученого, который родился позже всех.
arr.sort((a, b) => a.born - b.born);
console.log(arr);
console.log(`ученый, который родился позже всех это ${arr[arr.length - 1].name} ${arr[arr.length - 1].surname}`);

// - Найти год рождения Albert Einstein.
const dayEin = arr.findIndex(element => element.surname === 'Einstein');
console.log(`Einstein vas born ${arr[dayEin].born} year`);

// - Найти ученых, фамилия которых начинается на букву "С".
const nameSince = arr.filter((element) => element.surname.startsWith('C'));
console.log(nameSince);

// - Удалить из массива всех ученых, имя которых начинается на букву "A".
const nameSince2 = arr.filter((element) => !element.name.startsWith('A'));
console.log(nameSince2);

// - Узнать, все ли ученые работали в 19 веке.
const know = arr.every((element) => element.dead <= 1899) ? "есть ученные, которые работали в 19 в" : "таких ученных нет";
console.log(know);

// - Найти ученых, у которых совпадают первые буквы имени и фамилии.
const nameSince3 = arr.filter((element) => element.name.charAt(0) === element.surname.charAt(0));
console.log(nameSince3);

// - Удалить из массива ученых, родившихся в 15, 16 или 17 веках.
const nameSince4 = arr.filter(element => element.born > 1699);
console.log(nameSince4);












