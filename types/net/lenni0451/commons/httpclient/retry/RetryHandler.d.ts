import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { RetryAction } from '../../../../../net/lenni0451/commons/httpclient/retry/RetryAction.d.ts'
export interface RetryHandler extends Object{
    shouldRetry(arg0: HttpResponse): RetryAction;
}