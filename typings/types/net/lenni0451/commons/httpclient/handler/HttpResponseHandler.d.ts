import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
export interface HttpResponseHandler<R extends unknown> extends Object{
    handle(arg0: HttpResponse): R;
}