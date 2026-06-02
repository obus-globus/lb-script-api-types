import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { HttpResponse } from '../../../../../net/lenni0451/commons/httpclient/HttpResponse.d.ts'
export class HttpRequestException extends IOException {
    constructor(arg0: HttpResponse)
    constructor(arg0: HttpResponse, arg1: string)
    readonly response: HttpResponse;
    getResponse(): HttpResponse;
}