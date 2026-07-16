import type { FullHttpResponse } from '../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { HttpServer } from '../../../../net/ccbluex/netty/http/HttpServer.d.ts'
import type { RequestContext } from '../../../../net/ccbluex/netty/http/model/RequestContext.d.ts'
export class HttpConductorKt extends Object {
    static processRequestContext(self: HttpServer, context: RequestContext): FullHttpResponse;
}