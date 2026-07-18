import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Http2HeadersEncoder$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$Configuration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2HeadersEncoder extends Object{
    configuration(): Http2HeadersEncoder$Configuration;
    encodeHeaders(arg0: number, arg1: (Object | null)[], arg2: ByteBuf): void;
}