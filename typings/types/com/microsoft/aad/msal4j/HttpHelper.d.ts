import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { HttpRequest } from '../../../../com/microsoft/aad/msal4j/HttpRequest.d.ts'
import type { IHttpClient } from '../../../../com/microsoft/aad/msal4j/IHttpClient.d.ts'
import type { IHttpHelper } from '../../../../com/microsoft/aad/msal4j/IHttpHelper.d.ts'
import type { IHttpResponse } from '../../../../com/microsoft/aad/msal4j/IHttpResponse.d.ts'
import type { IRetryPolicy } from '../../../../com/microsoft/aad/msal4j/IRetryPolicy.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { TelemetryManager } from '../../../../com/microsoft/aad/msal4j/TelemetryManager.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class HttpHelper extends Object implements IHttpHelper {
    static RETRY_AFTER_HEADER: string;
    constructor(arg0: AbstractApplicationBase, arg1: IRetryPolicy)
    constructor(arg0: IHttpClient, arg1: IRetryPolicy)
    // private httpClient: IHttpClient;
    // private retryDisabled: boolean;
    // private retryPolicy: IRetryPolicy;
    // private addRequestInfoToTelemetry(arg0: HttpRequest, arg1: JavaMap<any, any>): void;
    // private addResponseInfoToTelemetry(arg0: IHttpResponse, arg1: JavaMap<any, any>): void;
    // private checkForThrottling(arg0: RequestContext): void;
    executeHttpRequest(arg0: HttpRequest): IHttpResponse;
    executeHttpRequest(arg0: HttpRequest, arg1: RequestContext, arg2: ServiceBundle): IHttpResponse;
    executeHttpRequest(arg0: HttpRequest, arg1: RequestContext, arg2: TelemetryManager, arg3: IHttpClient): IHttpResponse;
    executeHttpRequestWithRetries(arg0: HttpRequest, arg1: IHttpClient): IHttpResponse;
    // private getRequestThumbprint(arg0: RequestContext): string;
    // private processThrottlingInstructions(arg0: IHttpResponse, arg1: RequestContext): void;
    setRetryPolicy(arg0: IRetryPolicy): void;
}