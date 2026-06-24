import type { HttpClientCodec$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { HttpClientCodec } from '../../../../../io/netty/handler/codec/http/HttpClientCodec.d.ts'
import type { HttpRequestEncoder } from '../../../../../io/netty/handler/codec/http/HttpRequestEncoder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HttpClientCodec$Encoder extends HttpRequestEncoder {
    private constructor(null_: HttpClientCodec)
    constructor(null_: HttpClientCodec, arg1: HttpClientCodec$1)
    // private upgraded: boolean;
    encode(arg0: ChannelHandlerContext, arg1: Object, arg2: Object[]): void;
}