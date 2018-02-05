var _name, _age;
var name = '', age = 0;
// 模块对象的构造函数
var foo = function (name, age) {
    _name = name;
    _age = age;
};

// 获取私有变量_name的变量值
foo.prototype.getName = function () {
    return _name;
};
