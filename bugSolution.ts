function greeter(person: string) {
    return "Hello, " + person;
}

let user = ["Jane User", "John User"];

// Solution 1: Greet each person in the array
user.forEach(person => {
    console.log(greeter(person));
});

// Solution 2: Greet a specific person (e.g., the first person)
console.log(greeter(user[0]));
//or
const firstUser = user[0];
console.log(greeter(firstUser));