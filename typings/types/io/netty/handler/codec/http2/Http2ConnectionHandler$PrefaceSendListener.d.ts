import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ChannelFutureListener } from '../../../../../io/netty/channel/ChannelFutureListener.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Http2ConnectionHandler$PrefaceSendListener extends Object implements ChannelFutureListener {
    static CLOSE: ChannelFutureListener;
    static CLOSE_ON_FAILURE: ChannelFutureListener;
    static FIRE_EXCEPTION_ON_FAILURE: ChannelFutureListener;
    constructor(null_: Http2ConnectionHandler, arg1: ChannelHandlerContext, arg2: ChannelPromise)
    // private ctx: ChannelHandlerContext;
    // private promise: ChannelPromise;
    operationComplete(arg0: ChannelFuture): void;
}