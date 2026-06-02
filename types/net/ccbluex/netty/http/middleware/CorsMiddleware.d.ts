import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Middleware$OnResponse } from '../../../../../net/ccbluex/netty/http/middleware/Middleware$OnResponse.d.ts'
import type { RequestContext } from '../../../../../net/ccbluex/netty/http/model/RequestContext.d.ts'
export class CorsMiddleware extends Object implements Middleware$OnResponse {
    constructor(allowedOrigins: string[], allowedMethods: string[], allowedHeaders: string[])
    // private allowedHeaders: string[];
    // private allowedMethods: string[];
    // private allowedOrigins: string[];
    invoke(context: RequestContext, response: FullHttpResponse): FullHttpResponse;
}