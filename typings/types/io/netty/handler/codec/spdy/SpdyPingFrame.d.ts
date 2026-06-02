import type { SpdyFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdyPingFrame extends SpdyFrame, Object{
    id(): number;
    setId(arg0: number): SpdyPingFrame;
}