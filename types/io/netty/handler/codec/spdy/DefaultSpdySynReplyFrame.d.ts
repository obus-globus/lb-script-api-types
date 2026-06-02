import type { DefaultSpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/DefaultSpdyHeadersFrame.d.ts'
import type { SpdySynReplyFrame } from '../../../../../io/netty/handler/codec/spdy/SpdySynReplyFrame.d.ts'
export class DefaultSpdySynReplyFrame extends DefaultSpdyHeadersFrame implements SpdySynReplyFrame {
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    setInvalid(): SpdySynReplyFrame;
    setLast(arg0: boolean): SpdySynReplyFrame;
    setStreamId(arg0: number): SpdySynReplyFrame;
    toString(): string;
}