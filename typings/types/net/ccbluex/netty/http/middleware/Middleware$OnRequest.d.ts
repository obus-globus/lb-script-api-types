import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Middleware } from '../../../../../net/ccbluex/netty/http/middleware/Middleware.d.ts'
import type { RequestContext } from '../../../../../net/ccbluex/netty/http/model/RequestContext.d.ts'
export interface Middleware$OnRequest extends Object, Middleware{
    invoke(context: RequestContext): FullHttpResponse | null;
}