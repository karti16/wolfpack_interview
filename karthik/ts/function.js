"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchData = exports.format = exports.addString = void 0;
exports.introduce = introduce;
exports.getName = getName;
function addNumber(a, b) {
    return a + b;
}
exports.default = addNumber;
var addString = function (str1, str2) {
    if (str2 === void 0) { str2 = ''; }
    return "".concat(str1, " ").concat(str2);
};
exports.addString = addString;
var format = function (title, param) { return "".concat(title, " ").concat(param); };
exports.format = format;
var fetchData = function (url) { return Promise.resolve('Data fetched'); };
exports.fetchData = fetchData;
function introduce(salutation) {
    var name = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        name[_i - 1] = arguments[_i];
    }
    return "".concat(salutation, " ").concat(name.join(', '));
}
function getName(user) {
    return "".concat(user === null || user === void 0 ? void 0 : user.first, " ").concat(user === null || user === void 0 ? void 0 : user.last);
}
