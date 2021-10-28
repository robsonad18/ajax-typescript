"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Index = void 0;
var register_1 = require("./register");
var Index = /** @class */ (function () {
    function Index() {
    }
    Index.GetSource = function () {
        var urlCurrent = window.location.href;
        var validate = urlCurrent.indexOf("localhost") > -1;
        return validate ? 'http://localhost/project/ajax-typescript' : '';
    };
    return Index;
}());
exports.Index = Index;
// Send register
register_1.Register.Send();
