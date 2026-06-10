import type { HttpResponse } from '../../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { HttpResponseHandler } from '../../../../../../net/lenni0451/commons/httpclient/handler/HttpResponseHandler.d.ts'
import type { ThrowingResponseHandler } from '../../../../../../net/lenni0451/commons/httpclient/handler/ThrowingResponseHandler.d.ts'
import type { GetRequest } from '../../../../../../net/lenni0451/commons/httpclient/requests/impl/GetRequest.d.ts'
export class RealmsClientCompatibleRequest extends GetRequest implements HttpResponseHandler<string> {
    static identity(): (param0: HttpResponse) => HttpResponse;
    static throwing(): ThrowingResponseHandler;
    constructor(arg0: string)
    handle(arg0: HttpResponse): string;
}