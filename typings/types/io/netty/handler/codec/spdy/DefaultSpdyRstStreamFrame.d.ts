import type { DefaultSpdyStreamFrame } from '../../../../../io/netty/handler/codec/spdy/DefaultSpdyStreamFrame.d.ts'
import type { SpdyRstStreamFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyRstStreamFrame.d.ts'
import type { SpdyStreamStatus } from '../../../../../io/netty/handler/codec/spdy/SpdyStreamStatus.d.ts'
export class DefaultSpdyRstStreamFrame extends DefaultSpdyStreamFrame implements SpdyRstStreamFrame {
    constructor(arg0: number, arg1: SpdyStreamStatus)
    constructor(arg0: number, arg1: number)
    // private status: SpdyStreamStatus;
    setLast(arg0: boolean): SpdyRstStreamFrame;
    setStatus(arg0: SpdyStreamStatus): SpdyRstStreamFrame;
    setStreamId(arg0: number): SpdyRstStreamFrame;
    status(): SpdyStreamStatus;
    toString(): string;
}