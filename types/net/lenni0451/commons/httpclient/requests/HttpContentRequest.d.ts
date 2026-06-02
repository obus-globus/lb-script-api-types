import type { URL } from '../../../../../java/net/URL.d.ts'
import type { HttpContent } from '../../../../../net/lenni0451/commons/httpclient/content/HttpContent.d.ts'
import type { HttpRequest } from '../../../../../net/lenni0451/commons/httpclient/requests/HttpRequest.d.ts'
export class HttpContentRequest extends HttpRequest {
    constructor(arg0: string, arg1: URL)
    constructor(arg0: string, arg1: string)
    readonly content: HttpContent;
    getContent(): HttpContent;
    hasContent(): boolean;
    setContent(arg0: HttpContent): HttpContentRequest;
}