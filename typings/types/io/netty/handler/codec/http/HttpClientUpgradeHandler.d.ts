import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandler } from '../../../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { HttpClientUpgradeHandler$SourceCodec } from '../../../../../io/netty/handler/codec/http/HttpClientUpgradeHandler$SourceCodec.d.ts'
import type { HttpClientUpgradeHandler$UpgradeCodec } from '../../../../../io/netty/handler/codec/http/HttpClientUpgradeHandler$UpgradeCodec.d.ts'
import type { HttpClientUpgradeHandler$UpgradeEvent } from '../../../../../io/netty/handler/codec/http/HttpClientUpgradeHandler$UpgradeEvent.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { HttpObjectAggregator } from '../../../../../io/netty/handler/codec/http/HttpObjectAggregator.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpClientUpgradeHandler extends HttpObjectAggregator implements ChannelOutboundHandler {
    constructor(arg0: HttpClientUpgradeHandler$SourceCodec, arg1: HttpClientUpgradeHandler$UpgradeCodec, arg2: number)
    // private currentUpgradeEvent: HttpClientUpgradeHandler$UpgradeEvent;
    // private sourceCodec: HttpClientUpgradeHandler$SourceCodec;
    // private upgradeCodec: HttpClientUpgradeHandler$UpgradeCodec;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    decode(arg0: ChannelHandlerContext, arg1: HttpObject, arg2: Object[]): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    flush(arg0: ChannelHandlerContext): void;
    read(arg0: ChannelHandlerContext): void;
    // private setUpgradeRequestHeaders(arg0: ChannelHandlerContext, arg1: HttpRequest): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}