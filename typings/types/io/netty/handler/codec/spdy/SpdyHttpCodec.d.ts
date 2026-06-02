import type { CombinedChannelDuplexHandler } from '../../../../../io/netty/channel/CombinedChannelDuplexHandler.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { SpdyHttpDecoder } from '../../../../../io/netty/handler/codec/spdy/SpdyHttpDecoder.d.ts'
import type { SpdyHttpEncoder } from '../../../../../io/netty/handler/codec/spdy/SpdyHttpEncoder.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
export class SpdyHttpCodec extends CombinedChannelDuplexHandler<SpdyHttpDecoder, SpdyHttpEncoder> {
    constructor(arg0: SpdyVersion, arg1: number)
    constructor(arg0: SpdyVersion, arg1: number, arg2: HttpHeadersFactory, arg3: HttpHeadersFactory)
    constructor(arg0: SpdyVersion, arg1: number, arg2: boolean)
}