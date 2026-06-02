import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { FullHttpMessage } from '../../../../../io/netty/handler/codec/http/FullHttpMessage.d.ts'
import type { FullHttpRequest } from '../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { HttpMessage } from '../../../../../io/netty/handler/codec/http/HttpMessage.d.ts'
import type { HttpObject } from '../../../../../io/netty/handler/codec/http/HttpObject.d.ts'
import type { HttpObjectAggregator } from '../../../../../io/netty/handler/codec/http/HttpObjectAggregator.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpServerUpgradeHandler$SourceCodec } from '../../../../../io/netty/handler/codec/http/HttpServerUpgradeHandler$SourceCodec.d.ts'
import type { HttpServerUpgradeHandler$UpgradeCodecFactory } from '../../../../../io/netty/handler/codec/http/HttpServerUpgradeHandler$UpgradeCodecFactory.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../../java/lang/CharSequence.d.ts'
export class HttpServerUpgradeHandler extends HttpObjectAggregator {
    constructor(arg0: HttpServerUpgradeHandler$SourceCodec, arg1: HttpServerUpgradeHandler$UpgradeCodecFactory)
    constructor(arg0: HttpServerUpgradeHandler$SourceCodec, arg1: HttpServerUpgradeHandler$UpgradeCodecFactory, arg2: number)
    constructor(arg0: HttpServerUpgradeHandler$SourceCodec, arg1: HttpServerUpgradeHandler$UpgradeCodecFactory, arg2: number, arg3: HttpHeadersFactory, arg4: HttpHeadersFactory)
    constructor(arg0: HttpServerUpgradeHandler$SourceCodec, arg1: HttpServerUpgradeHandler$UpgradeCodecFactory, arg2: number, arg3: HttpHeadersFactory, arg4: HttpHeadersFactory, arg5: boolean)
    constructor(arg0: HttpServerUpgradeHandler$SourceCodec, arg1: HttpServerUpgradeHandler$UpgradeCodecFactory, arg2: number, arg3: boolean)
    // private failedAggregationStart: boolean;
    // private handlingUpgrade: boolean;
    // private headersFactory: HttpHeadersFactory;
    // private removeAfterFirstRequest: boolean;
    // private sourceCodec: HttpServerUpgradeHandler$SourceCodec;
    // private trailersFactory: HttpHeadersFactory;
    // private upgradeCodecFactory: HttpServerUpgradeHandler$UpgradeCodecFactory;
    beginAggregation(arg0: HttpMessage, arg1: ByteBuf): FullHttpMessage;
    // private createUpgradeResponse(arg0: CharSequence): FullHttpResponse;
    decode(arg0: ChannelHandlerContext, arg1: HttpObject, arg2: Object[]): void;
    shouldHandleUpgradeRequest(arg0: HttpRequest): boolean;
    // private upgrade(arg0: ChannelHandlerContext, arg1: FullHttpRequest): boolean;
}