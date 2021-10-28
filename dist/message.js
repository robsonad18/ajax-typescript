"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var sweetalert2_1 = __importDefault(require("sweetalert2"));
var Message = /** @class */ (function () {
    function Message() {
    }
    Message.getAlert = function (title, msg, type) {
        sweetalert2_1.default.fire(title, msg, type);
        return true;
    };
    return Message;
}());
exports.Message = Message;
