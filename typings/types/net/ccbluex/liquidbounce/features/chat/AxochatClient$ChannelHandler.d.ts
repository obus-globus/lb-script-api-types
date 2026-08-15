import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { SimpleChannelInboundHandler } from '../../../../../io/netty/channel/SimpleChannelInboundHandler.d.ts'
import type { WebSocketClientHandshaker } from '../../../../../io/netty/handler/codec/http/websocketx/WebSocketClientHandshaker.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
import type { AxochatClient } from '../../../../../net/ccbluex/liquidbounce/features/chat/AxochatClient.d.ts'
export class AxochatClient$ChannelHandler extends SimpleChannelInboundHandler<Object> {
    constructor(null_: AxochatClient, handshaker: WebSocketClientHandshaker)
    handshakeFuture: ChannelPromise;
    // private handshaker: WebSocketClientHandshaker;
    /**
     * Calls {@link ChannelHandlerContext.fireChannelActive} to forward
     * to the next {@link ChannelInboundHandler} in the {@link ChannelPipeline}.
     *
     * Subclasses may override this method to change behavior.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L372 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:372}
     */
    channelActive(ctx: ChannelHandlerContext): void;
    /**
     * Calls {@link ChannelHandlerContext.fireChannelInactive} to forward
     * to the next {@link ChannelInboundHandler} in the {@link ChannelPipeline}.
     *
     * Subclasses may override this method to change behavior.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L382 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:382}
     */
    channelInactive(ctx: ChannelHandlerContext): void;
    /**
     * **Please keep in mind that this method will be renamed to
     * `messageReceived(ChannelHandlerContext, I)` in 5.0.**
     *
     * Is called for each message of type {@link I}.
     *
     * @param ctx the {@link ChannelHandlerContext} which this {@link SimpleChannelInboundHandler} belongs to
     * @param msg @throws Exception    is thrown if an error occurred
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L414 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:414}
     */
    protected channelRead0(ctx: ChannelHandlerContext, msg: Object): void;
    /**
     * Calls {@link ChannelHandlerContext.fireExceptionCaught} to forward
     * to the next {@link ChannelHandler} in the {@link ChannelPipeline}.
     *
     * Subclasses may override this method to change behavior.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L392 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:392}
     */
    exceptionCaught(ctx: ChannelHandlerContext, cause: Throwable): void;
    /**
     * Do nothing by default, subclasses may override this method.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/affa27f4374c5dc750675ca894a074284c5832d9/src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt#L362 | src/main/kotlin/net/ccbluex/liquidbounce/features/chat/AxochatClient.kt:362}
     */
    handlerAdded(ctx: ChannelHandlerContext): void;
}