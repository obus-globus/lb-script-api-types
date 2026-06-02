import type { HttpRequest } from '../../../../com/microsoft/aad/msal4j/HttpRequest.d.ts'
import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IHttpClient extends Object{
    send(arg0: HttpRequest): IHttpResponse;
}