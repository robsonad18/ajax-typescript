import { Index } from ".";
import { Ajax } from "./ajax";
import { Message } from "./message";

/**
 * Envia os dados do login, retorna mensagem e redireciona
 */
export abstract class Register {
   /**
    * Envia
    */
   static Send() {
      const formRegister = (document!.querySelector('[data-form-register]') as HTMLFormElement);

      formRegister.addEventListener('submit', (event: Event) => {
         event.preventDefault();

         const dataSend = {
            url: Index.GetSource() + '/app/Register',
            data: (new FormData(formRegister))
         };

         (new Ajax).Post(dataSend.url, dataSend.data, (status, response) => {
            if (status.status === 200 && status.readyState === 4 && response.status === 200) {
               Message.getAlert(String(response.status), response.message, 'success');
               return;
            }
            Message.getAlert(String(response.status), response.message, 'error');
         });
      });
   }
}