//Problem-6
interface student {
    name: string,
    age: number,
    email: string
}
type typeOfPartial = Partial<student>;
const updateProfile = (p1: student, p2: typeOfPartial): student => {
    return { ...p1, ...p2 }
}
let myProfile: student = { name: "Alice", age: 25, email: "alice@example.com" };
console.log(updateProfile(myProfile, { email: "alice26@gmail.com" }));
