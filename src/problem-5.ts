//Problem-5

const getProperty = <O, K extends keyof O>(object: O, key: K) => {
    return object[key];
}

const person = { name: "Alice", age: 30 };
console.log(getProperty(person, "age"));