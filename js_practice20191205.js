// Today's practice


const todo = ['exercise', 'study', 'speak another language'];

for(let i = 0; i < todo.length; i++) {
    console.log(todo[i]);
}

todo.forEach(item => {
    console.log(item);
});

const basket = ['apples', 'oranges', 'grapes', 'bananas'];

for (let i=0; i < basket.length; i++){
    console.log(basket[i]);
}

basket.forEach(item => {
    console.log(item);
})

for(item of basket) {
    console.log(item);
}

for(item of 'basket') {
    console.log(item);
}

var array = ['banana', 'apple', 'meron', 'orange'];
for(var item of array) {
    console.log(item);
}

var p = document.getElementsByTagName('p');
for(var element of p){
    console.log(element);
}

var color = ['green', 'blue', 'red', 'yellow'];
for(var item of color) {
    console.log(item);
}

var lists = ['sato', ' ito', 'suzuki', 'kimura', 'tanaka', 'takahasi'];
for(var i = 0; i < lists.length; i++) {
    console.log(lists[i]);
}

for(var count = 0; count < 10; count++) {
    console.log(count);
}

// 0-50までの数値を一つずつ足した合計値を求めよ
var result = 0;
for(var count=0; count <= 50; count++) {
    result +=count;
}
console.log(result); //1275

// 増減値にーーを使って10から１の範囲で繰り返した合計値を求める
var result = 0;
for(var count = 10; count >= 1;count--) {
    result += count;
}
console.log(result); //55


//0から100までの範囲で、偶数だけを表示
for ( var i=0; i < 100; i++) {
    if(i%2 !== 0) continue;
    console.log(i);
}

//1,4 display
var array = [2, 4, 6, 1, 7];
for (var i = 0; i < array.length; i++){
   if(array[i]===1) console.log(array[i]);
   if(array[i]===4)console.log(array[i]);
}

var items = [2, 4, 6, 1, 7];
for(var i = 0; i < items.length; i++){
    switch(items[i]){
        case 1:
            console.log(items[i]);
            break;
        case 4:
            console.log(items[i]);
            break;
    }
}

//progate4,5

const numbers = [1,2,3];
numbers.forEach((number) => {
    console.log(number)
});   //123

//find method
const numbers = [1,3,5,7];
const foundNumber  = numbers.find((number)=>{
    return number > 3;
});
console.log(foundNumber);

const characters = [
 {id:1, name:'wanko'},
 {id:2,name:"sennin"}
];

const foundCharacter = characters.find((character) => {
    return character.id ===1;

});

console.log(foundCharacter);

const numbers = [1,2,3,4];
consr evenNumbers = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNumbers);

const characters = [
    {id:1, name:"wanko", age:14}
    {id:2, name:"beybe", age:15}
    {id:3, name:"sennin", age:100}
];

const underTwenty =characters.filter((character)=> {
    return character.age < 20;
});
console.log(underTwenty);

//Map arrayの中のすべてのitemに処理して、新たなarrayつくる。
cont numbers = [1,2,3];
const doubledNumbers = numbers.map((number)=> {
    return number*2;

});

console.log(doubledNumbers);

const names = [
    {firstName: "kate", lastName:"jones"},
    {firstName:"brian", }
];

const fullNames = names.map((name) => {
    return name.firstName + name.lastName;
});
console.log(fullNames);

const printWanko = () => {
    console.log('wubu');
}
const printHitsuji = () =>{
    console.log("sennin");
}

const call = (callback) => {
    console.log('call function');
    callback();
};
call(printWanko); 

const introduce = (name) => {
    console.log(name);
};
introduce("wanko");

//function
const introduce = (name) => {
    console.log(name);
};
introduce("wanko");

//call back
const introduce =(callback)=> {
    callback("dog");
};
introduce((name)=> {
    console.log(name);
})

const introduce = (name, age) => {
    console.log(`My ${name} is ${age}`);
};
introduce('wubu', 13);


