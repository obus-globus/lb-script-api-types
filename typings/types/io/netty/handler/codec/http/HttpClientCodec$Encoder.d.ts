import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { HttpClientCodec } from '../../../../../io/netty/handler/codec/http/HttpClientCodec.d.ts'
import type { HttpRequestEncoder } from '../../../../../io/netty/handler/codec/http/HttpRequestEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpClientCodec$Encoder extends HttpRequestEncoder {
    constructor(null_: HttpClientCodec, arg1: any)
    // private upgraded: boolean;
    encode(arg0: ChannelHandlerContext, arg1: Object, arg2: Object[]): void;
}