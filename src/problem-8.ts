//Problem-5

{

    const validateKeys = <T>(obj: object, keys: (keyof T)[]): boolean => {
        return keys.every(key => key in obj)
    }

    const person = { name: "Alice", age: 30};
  console.log(validateKeys(person, ["name", "age", "email"]));
}