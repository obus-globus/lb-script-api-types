import type { SpdyFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyFrame.d.ts'
import type { SpdySessionStatus } from '../../../../../io/netty/handler/codec/spdy/SpdySessionStatus.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdyGoAwayFrame extends SpdyFrame, Object{
    lastGoodStreamId(): number;
    setLastGoodStreamId(arg0: number): SpdyGoAwayFrame;
    setStatus(arg0: SpdySessionStatus): SpdyGoAwayFrame;
    status(): SpdySessionStatus;
}