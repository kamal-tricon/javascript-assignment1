var name = "Kamlesh Kumar";
var age = 23;

var person = {
    name: "kamlesh Kumar",
    age: 23
};
person.height = 160;
person.friend =  ['tom', 'jery', 'donald'];
person.friend.forEach(element => {
    console.log("Welcome "+element);
});
console.log(person)