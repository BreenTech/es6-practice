const add = (x, y) => x + y;
const add1 = x => x*2;
const add2 = () => 5
const add3 = (x, y) =>{
    const sum = x + y;
    const diff = x- y;
    const result = sum* diff;
    return result;
}

const result = add3(10, 4);
console.log(result);