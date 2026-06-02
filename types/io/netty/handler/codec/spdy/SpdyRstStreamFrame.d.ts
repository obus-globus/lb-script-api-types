import type { SpdyStreamFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyStreamFrame.d.ts'
import type { SpdyStreamStatus } from '../../../../../io/netty/handler/codec/spdy/SpdyStreamStatus.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdyRstStreamFrame extends SpdyStreamFrame, Object{
    setLast(arg0: boolean): SpdyRstStreamFrame;
    setStatus(arg0: SpdyStreamStatus): SpdyRstStreamFrame;
    setStreamId(arg0: number): SpdyRstStreamFrame;
    status(): SpdyStreamStatus;
}