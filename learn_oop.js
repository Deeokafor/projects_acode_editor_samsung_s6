function User(name, email, password, getUserDetails) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.getUserDetails = function () {
        return `User is: ${name}, \nEmail is:${email}, \nPassword is: ${password}`;
    }
}

let usr_001 = new User('Groot')
let usr_002 = new User('John Doe', 'johndoe@mail.com', 'johndoe123');

console.log(usr_001.getUserDetails())