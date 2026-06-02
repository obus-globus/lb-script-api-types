import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdySynReplyFrame extends SpdyHeadersFrame, Object{
    setInvalid(): SpdySynReplyFrame;
    setLast(arg0: boolean): SpdySynReplyFrame;
    setStreamId(arg0: number): SpdySynReplyFrame;
}