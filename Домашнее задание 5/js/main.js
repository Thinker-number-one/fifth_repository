// Задание первое

let result = String('');
for(let i = 1; i <= 50; i++) {
    result = result + i + ' ';
}
console.log(result);

// Задание второе

for(let i = 50; i >= 25; i--) {
    console.log(i);
}

// Задание третье

for(let i = 2500; i <= 3000; i++) {
    if(i % 2 != 0) {
        console.log(i);
    }
}