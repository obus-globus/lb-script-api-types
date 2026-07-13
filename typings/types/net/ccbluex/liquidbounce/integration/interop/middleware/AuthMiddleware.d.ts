import type { ChannelHandlerContext } from '../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { FullHttpResponse } from '../../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AuthMiddleware$Companion } from '../../../../../../net/ccbluex/liquidbounce/integration/interop/middleware/AuthMiddleware$Companion.d.ts'
import type { Middleware$OnRequest } from '../../../../../../net/ccbluex/netty/http/middleware/Middleware$OnRequest.d.ts'
import type { Middleware$OnResponse } from '../../../../../../net/ccbluex/netty/http/middleware/Middleware$OnResponse.d.ts'
import type { Middleware$OnWebSocketUpgrade } from '../../../../../../net/ccbluex/netty/http/middleware/Middleware$OnWebSocketUpgrade.d.ts'
import type { RequestContext } from '../../../../../../net/ccbluex/netty/http/model/RequestContext.d.ts'
export class AuthMiddleware extends Object implements Middleware$OnRequest, Middleware$OnResponse, Middleware$OnWebSocketUpgrade {
    static AUTH_CODE_PARAM: string;
    static AUTH_COOKIE_NAME: string;
    static Companion: AuthMiddleware$Companion;
    constructor()
    /**
     * On request handler
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/middleware/AuthMiddleware.kt#L58 | src/main/kotlin/net/ccbluex/liquidbounce/integration/interop/middleware/AuthMiddleware.kt:58}
     */
    invoke(ctx: ChannelHandlerContext, request: HttpRequest): FullHttpResponse | null;
    invoke(context: RequestContext): FullHttpResponse | null;
    invoke(context: RequestContext, response: FullHttpResponse): FullHttpResponse;
}