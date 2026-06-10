import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { HttpResponseHandler } from '../../../../../net/lenni0451/commons/httpclient/handler/HttpResponseHandler.d.ts'
export class ThrowingResponseHandler extends Object implements HttpResponseHandler<HttpResponse> {
    static identity(): (param0: HttpResponse) => HttpResponse;
    static throwing(): ThrowingResponseHandler;
    constructor()
    handle(arg0: HttpResponse): HttpResponse;
}