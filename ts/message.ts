import swal from 'sweetalert2';
import { SweetAlertIcon} from 'sweetalert2';
export class Message {
   static getAlert = (title: string, msg: string, type: SweetAlertIcon) => {
      swal.fire(title, msg, type);

      return true;
   }
}

