import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IRetryPolicy extends Object{
    getMaxRetryCount(arg0: IHttpResponse): number;
    getRetryDelayMs(arg0: IHttpResponse): number;
    isRetryable(arg0: IHttpResponse): boolean;
}