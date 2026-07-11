import type { ChannelDuplexHandler } from '../../../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { WebSocketClientExtensionHandshaker } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketClientExtensionHandshaker.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WebSocketClientExtensionHandler extends ChannelDuplexHandler {
    constructor(...arg0: WebSocketClientExtensionHandshaker[])
    // private extensionHandshakers: WebSocketClientExtensionHandshaker[];
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}