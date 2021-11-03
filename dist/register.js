"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Register = void 0;
var _1 = require(".");
var ajax_1 = require("./ajax");
var message_1 = require("./message");
/**
 * Envia os dados do login, retorna mensagem e redireciona
 */
var Register = /** @class */ (function () {
    function Register() {
    }
    /**
     * Envia
     */
    Register.Send = function () {
        var formRegister = document.querySelector('[data-form-register]');
        formRegister.addEventListener('submit', function (event) {
            event.preventDefault();
            console.log('entrei aqui');
            var dataSend = {
                url: _1.Index.GetSource() + '/app/Register.php',
                data: (new FormData(formRegister))
            };
            (new ajax_1.Ajax).Post(dataSend.url, dataSend.data, function (status, response) {
                if (status.status === 200 && status.readyState === 4 && response.status === 200) {
                    message_1.Message.getAlert(String(response.status), response.message, 'success');
                    return;
                }
                message_1.Message.getAlert(String(response.status), response.message, 'error');
            });
        });
    };
    return Register;
}());
exports.Register = Register;
