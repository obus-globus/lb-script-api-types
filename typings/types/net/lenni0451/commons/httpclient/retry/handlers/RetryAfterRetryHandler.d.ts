import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { HttpResponse } from '../../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { RetryAction } from '../../../../../../net/lenni0451/commons/httpclient/retry/RetryAction.d.ts'
import type { RetryHandler } from '../../../../../../net/lenni0451/commons/httpclient/retry/RetryHandler.d.ts'
export class RetryAfterRetryHandler extends Object implements RetryHandler {
    constructor()
    // private parseSecondsOrHttpDate(arg0: string): number;
    shouldRetry(arg0: HttpResponse): RetryAction;
}