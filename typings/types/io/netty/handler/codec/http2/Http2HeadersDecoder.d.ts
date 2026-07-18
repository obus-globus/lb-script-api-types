import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Http2HeadersDecoder$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2HeadersDecoder$Configuration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2HeadersDecoder extends Object{
    configuration(): Http2HeadersDecoder$Configuration;
    decodeHeaders(arg0: number, arg1: ByteBuf): (Object | null)[];
}