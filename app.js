var user = {};
user.name = 'Lulingniu';
user.getName = function () {
    return this.name;
};
user.setName = function (name) {
    this.name = name;
};
console.dir(user);
