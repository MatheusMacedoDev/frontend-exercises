// Literal object
const user = {
    name: "Matheus",
    nickname: "Math",
    email: "matheus@email.com",
    password: "matheus@134"
}

const peoples = [
    { 
        name: "Matheus",
        get nameU() {
            return this.name.toUpperCase()
        }
    },
    { name: "Sarah" }
];

peoples.forEach(people => {
    console.log(people.name);
});


function User(email, password) {
    this.email = email;
    this.password = password;
    this.whatIs = function() {
        console.log(this);
    }
}

const user1 = new User('matheus@email.com', 'matheus@134');

user1.lala = 1;

console.log(user1.lala);

user1.whatIs();