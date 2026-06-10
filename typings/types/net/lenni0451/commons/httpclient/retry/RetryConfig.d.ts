import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { RetryAction } from '../../../../../net/lenni0451/commons/httpclient/retry/RetryAction.d.ts'
import type { RetryHandler } from '../../../../../net/lenni0451/commons/httpclient/retry/RetryHandler.d.ts'
export class RetryConfig extends Object {
    constructor()
    constructor(arg0: number, arg1: number)
    constructor(arg0: number, arg1: number, arg2: (param0: HttpResponse) => RetryAction)
    readonly maxConnectRetries: number;
    readonly maxResponseRetries: number;
    readonly retryHandler: (param0: HttpResponse) => RetryAction;
    getMaxConnectRetries(): number;
    getMaxResponseRetries(): number;
    getRetryHandler(): (param0: HttpResponse) => RetryAction;
    setMaxConnectRetries(arg0: number): RetryConfig;
    setMaxResponseRetries(arg0: number): RetryConfig;
    setRetryHandler(arg0: (param0: HttpResponse) => RetryAction): RetryConfig;
}