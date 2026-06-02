import type { ChannelDuplexHandler } from '../../../../../io/netty/channel/ChannelDuplexHandler.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpServerKeepAliveHandler extends ChannelDuplexHandler {
    constructor()
    // private pendingResponses: number;
    // private persistentConnection: boolean;
    channelRead(arg0: ChannelHandlerContext, arg1: Object): void;
    // private shouldKeepAlive(): boolean;
    // private trackResponse(arg0: HttpResponse): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}