import type { SpdyFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdyWindowUpdateFrame extends SpdyFrame, Object{
    deltaWindowSize(): number;
    setDeltaWindowSize(arg0: number): SpdyWindowUpdateFrame;
    setStreamId(arg0: number): SpdyWindowUpdateFrame;
    streamId(): number;
}