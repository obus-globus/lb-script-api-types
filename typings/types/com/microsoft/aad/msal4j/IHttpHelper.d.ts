import type { HttpRequest } from '../../../../com/microsoft/aad/msal4j/HttpRequest.d.ts'
import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IHttpHelper extends Object{
    executeHttpRequest(arg0: HttpRequest, arg1: RequestContext, arg2: ServiceBundle): IHttpResponse;
}