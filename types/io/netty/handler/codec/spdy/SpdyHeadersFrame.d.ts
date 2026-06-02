import type { SpdyStreamFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyStreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdyHeadersFrame extends SpdyStreamFrame, Object{
    headers(): (Object | null)[];
    isInvalid(): boolean;
    isTruncated(): boolean;
    setInvalid(): SpdyHeadersFrame;
    setLast(arg0: boolean): SpdyHeadersFrame;
    setStreamId(arg0: number): SpdyHeadersFrame;
    setTruncated(): SpdyHeadersFrame;
}