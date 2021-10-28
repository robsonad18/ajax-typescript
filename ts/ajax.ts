interface IResponseAjaxItem{
   message: string,
   status: number,
   redirect:string
}

interface IResponseAjaxStatus{
   status: number;
   readyState: number;
}

export class ResponseAjaxStatus implements IResponseAjaxStatus{
   status: number;
   readyState: number;

   constructor(status: number, readyState: number) {
      this.status = status;
      this.readyState = readyState;
   }
}

/**
 * classe responsavel por efetuar o ajax
 */
export class Ajax{
    /**
     * STatus da requisicao
     */
    private readyStatusCode: number = 4;

    /**
     * success
     * @param request 
     * @returns 
     */
    private success = (request: XMLHttpRequest) => request.readyState === this.readyStatusCode;
    


    /**
     * Requisição get
     * @param url 
     * @param callback 
     */
    public Get = (url: string, callback: (status:ResponseAjaxStatus, response: IResponseAjaxItem) => any) => {
        const obRequest = new XMLHttpRequest();
        
        obRequest.responseType = 'json';
        obRequest.onreadystatechange = () => {
            let finished = this.success(obRequest);

            const responseItem:IResponseAjaxItem = obRequest.response;
            const responseStatus = new ResponseAjaxStatus(obRequest.status, obRequest.readyState);

            if (finished) callback(responseStatus, responseItem);
        }
        obRequest.open("get", url, true);
        obRequest.send();
    }



    /**
     * Requisição posst
     * @param url 
     * @param data 
     * @param callback 
     */
    public Post = (url: string, data: FormData, callback: (status:ResponseAjaxStatus, response: IResponseAjaxItem) => any) => {
        const obRequest = new XMLHttpRequest();
        
        obRequest.responseType = 'json';
        obRequest.onreadystatechange = () => {
            let finished = this.success(obRequest);

            const responseItem:IResponseAjaxItem = obRequest.response;

            const responseStatus = new ResponseAjaxStatus(obRequest.status, obRequest.readyState);

            if (finished) callback(responseStatus, responseItem);
        }
        obRequest.open("post", url, true);
        obRequest.send(data);
    }
}