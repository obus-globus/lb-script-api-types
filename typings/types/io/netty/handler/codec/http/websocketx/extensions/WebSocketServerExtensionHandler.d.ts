import type { ChannelDuplexHandler } from '../../../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { HttpRequest } from '../../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpResponse } from '../../../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { WebSocketServerExtension } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketServerExtension.d.ts'
import type { WebSocketServerExtensionHandshaker } from '../../../../../../../io/netty/handler/codec/http/websocketx/extensions/WebSocketServerExtensionHandshaker.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class WebSocketServerExtensionHandler extends ChannelDuplexHandler {
    constructor(...arg0: WebSocketServerExtensionHandshaker[])
    // private extensionHandshakers: WebSocketServerExtensionHandshaker[];
    // private validExtensions: WebSocketServerExtension[][];
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    // private handlePotentialUpgrade(arg0: ChannelHandlerContext, arg1: ChannelPromise, arg2: HttpResponse, arg3: WebSocketServerExtension[]): void;
    onHttpRequestChannelRead(arg0: ChannelHandlerContext, arg1: HttpRequest): void;
    onHttpResponseWrite(arg0: ChannelHandlerContext, arg1: HttpResponse, arg2: ChannelPromise): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}