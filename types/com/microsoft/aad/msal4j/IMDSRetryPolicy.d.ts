import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { ManagedIdentityRetryPolicy } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityRetryPolicy.d.ts'
export class IMDSRetryPolicy extends ManagedIdentityRetryPolicy {
    constructor()
    // private currentRetryCount: number;
    // private lastStatusCode: number;
    getMaxRetryCount(arg0: IHttpResponse): number;
    getRetryDelayMs(arg0: IHttpResponse): number;
    isRetryable(arg0: IHttpResponse): boolean;
}