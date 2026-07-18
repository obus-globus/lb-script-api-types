import type { Http2FrameSizePolicy } from '../../../../../io/netty/handler/codec/http2/Http2FrameSizePolicy.d.ts'
import type { Http2HeadersEncoder$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$Configuration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2FrameWriter$Configuration extends Object{
    frameSizePolicy(): Http2FrameSizePolicy;
    headersConfiguration(): Http2HeadersEncoder$Configuration;
}