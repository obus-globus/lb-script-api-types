import type { Proxy$Type } from '../../../java/net/Proxy$Type.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { HttpUrl } from '../../../okhttp3/HttpUrl.d.ts'
import type { Request } from '../../../okhttp3/Request.d.ts'
export class RequestLine extends Object {
    static INSTANCE: RequestLine;
    get(request: Request, proxyType: Proxy$Type): string;
    // private includeAuthorityInRequestLine(request: Request, proxyType: Proxy$Type): boolean;
    requestPath(url: HttpUrl): string;
}