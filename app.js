'use strict';
const memo = new Map(); // 連想配列Mapの定義
memo.set(0,0); // ０と１は答えが決まっている
memo.set(1,1); // set(番号,答え)

function fib(n) {
    if (memo.has(n)) { // has(n)→nをキーとした答えをもっている
        return memo.get(n); // 0番目と1番目のとき
    }
    const value = fib(n -1) + fib(n - 2);
    memo.set(n,value);
    return value;
}

const length = 40;
for (let i = 0; i <= length;i++){
    console.log(fib(i));
}