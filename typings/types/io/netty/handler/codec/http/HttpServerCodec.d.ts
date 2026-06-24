import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { CombinedChannelDuplexHandler } from '../../../../../io/netty/channel/CombinedChannelDuplexHandler.d.ts'
import type { HttpDecoderConfig } from '../../../../../io/netty/handler/codec/http/HttpDecoderConfig.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpRequestDecoder } from '../../../../../io/netty/handler/codec/http/HttpRequestDecoder.d.ts'
import type { HttpResponseEncoder } from '../../../../../io/netty/handler/codec/http/HttpResponseEncoder.d.ts'
import type { HttpServerUpgradeHandler$SourceCodec } from '../../../../../io/netty/handler/codec/http/HttpServerUpgradeHandler$SourceCodec.d.ts'
export class HttpServerCodec extends CombinedChannelDuplexHandler<HttpRequestDecoder, HttpResponseEncoder> implements HttpServerUpgradeHandler$SourceCodec {
    constructor()
    constructor(arg0: HttpDecoderConfig)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: number, arg5: boolean, arg6: boolean)
    // private methodOverflowQueue: number[];
    // private methodQueue: number;
    // private methodQueueSize: number;
    // private mustCloseAfterResponse: boolean;
    // private enqueueMethod(arg0: HttpMethod): void;
    // private pollMethod(): number;
    upgradeFrom(arg0: ChannelHandlerContext): void;
}