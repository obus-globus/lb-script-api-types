import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { WebSocketClientHandshaker } from '../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientHandshaker.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class AxochatClient$ChannelHandler extends SimpleChannelInboundHandler<Object> {
    constructor(null_: AxochatClient$ChannelHandler, handshaker: WebSocketClientHandshaker)
    handshakeFuture: ChannelPromise;
    // private handshaker: WebSocketClientHandshaker;
    /**
     * Calls {@link ChannelHandlerContext.fireChannelActive} to forward
     * to the next {@link ChannelInboundHandler} in the {@link ChannelPipeline}.
     *
     * Subclasses may override this method to change behavior.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L366 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:366}
     */
    channelActive(ctx: ChannelHandlerContext): void;
    /**
     * Calls {@link ChannelHandlerContext.fireChannelInactive} to forward
     * to the next {@link ChannelInboundHandler} in the {@link ChannelPipeline}.
     *
     * Subclasses may override this method to change behavior.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L376 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:376}
     */
    channelInactive(ctx: ChannelHandlerContext): void;
    /**
     * **Please keep in mind that this method will be renamed to
     * `messageReceived(ChannelHandlerContext, I)` in 5.0.**
     *
     * Is called for each message of type {@link I}.
     *
     * @throws Exception    is thrown if an error occurred
     *
     * @param ctx the {@link ChannelHandlerContext} which this {@link SimpleChannelInboundHandler} belongs to
     * @param msg the message to handle
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L404 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:404}
     */
    protected channelRead0(ctx: ChannelHandlerContext, msg: Object): void;
    /**
     * Calls {@link ChannelHandlerContext.fireExceptionCaught} to forward
     * to the next {@link ChannelHandler} in the {@link ChannelPipeline}.
     *
     * Subclasses may override this method to change behavior.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L386 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:386}
     */
    exceptionCaught(ctx: ChannelHandlerContext, cause: Throwable): void;
    /**
     * Do nothing by default, subclasses may override this method.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L359 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:359}
     */
    handlerAdded(ctx: ChannelHandlerContext): void;
}