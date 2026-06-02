import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { IRetryPolicy } from '../../../../com/microsoft/aad/msal4j/IRetryPolicy.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DefaultRetryPolicy extends Object implements IRetryPolicy {
    constructor()
    getMaxRetryCount(arg0: IHttpResponse): number;
    getRetryDelayMs(arg0: IHttpResponse): number;
    isRetryable(arg0: IHttpResponse): boolean;
}