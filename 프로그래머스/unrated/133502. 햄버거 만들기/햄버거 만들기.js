function solution(ingredient) {
let count = 0;
const arr = [];
const h = JSON.stringify([1, 2, 3, 1]);
for (let i = 0; i < ingredient.length; i++) {
    arr.push(ingredient[i]);
    if (JSON.stringify(arr.slice(-4)) === h) {
        count += 1;
        arr.pop();
        arr.pop();
        arr.pop();
        arr.pop();
    }
}
return count;
}