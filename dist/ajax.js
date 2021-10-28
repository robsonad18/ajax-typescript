"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ajax = exports.ResponseAjaxStatus = void 0;
var ResponseAjaxStatus = /** @class */ (function () {
    function ResponseAjaxStatus(status, readyState) {
        this.status = status;
        this.readyState = readyState;
    }
    return ResponseAjaxStatus;
}());
exports.ResponseAjaxStatus = ResponseAjaxStatus;
/**
 * classe responsavel por efetuar o ajax
 */
var Ajax = /** @class */ (function () {
    function Ajax() {
        var _this = this;
        /**
         * STatus da requisicao
         */
        this.readyStatusCode = 4;
        /**
         * success
         * @param request
         * @returns
         */
        this.success = function (request) { return request.readyState === _this.readyStatusCode; };
        /**
         * Requisição get
         * @param url
         * @param callback
         */
        this.Get = function (url, callback) {
            var obRequest = new XMLHttpRequest();
            obRequest.responseType = 'json';
            obRequest.onreadystatechange = function () {
                var finished = _this.success(obRequest);
                var responseItem = obRequest.response;
                var responseStatus = new ResponseAjaxStatus(obRequest.status, obRequest.readyState);
                if (finished)
                    callback(responseStatus, responseItem);
            };
            obRequest.open("get", url, true);
            obRequest.send();
        };
        /**
         * Requisição posst
         * @param url
         * @param data
         * @param callback
         */
        this.Post = function (url, data, callback) {
            var obRequest = new XMLHttpRequest();
            obRequest.responseType = 'json';
            obRequest.onreadystatechange = function () {
                var finished = _this.success(obRequest);
                var responseItem = obRequest.response;
                var responseStatus = new ResponseAjaxStatus(obRequest.status, obRequest.readyState);
                if (finished)
                    callback(responseStatus, responseItem);
            };
            obRequest.open("post", url, true);
            obRequest.send(data);
        };
    }
    return Ajax;
}());
exports.Ajax = Ajax;
