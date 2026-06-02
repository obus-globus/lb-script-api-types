import type { HttpResponse } from '../../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
import type { HttpRequestException } from '../../../../../../net/lenni0451/commons/httpclient/exceptions/HttpRequestException.d.ts'
export class InformativeHttpRequestException extends HttpRequestException {
    constructor(arg0: HttpResponse, arg1: string)
}