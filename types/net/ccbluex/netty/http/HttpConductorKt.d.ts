import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../../kotlin/coroutines/Continuation.d.ts'
import type { HttpServer } from '../../../../net/ccbluex/netty/http/HttpServer.d.ts'
import type { RequestContext } from '../../../../net/ccbluex/netty/http/model/RequestContext.d.ts'
export class HttpConductorKt extends Object {
    static processRequestContext(paramarg0: HttpServer, paramarg1: RequestContext, paramarg2: Continuation<Object>): Object;
}