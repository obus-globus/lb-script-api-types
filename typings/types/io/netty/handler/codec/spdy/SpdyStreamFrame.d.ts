import type { SpdyFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdyStreamFrame extends SpdyFrame, Object{
    isLast(): boolean;
    setLast(arg0: boolean): SpdyStreamFrame;
    setStreamId(arg0: number): SpdyStreamFrame;
    streamId(): number;
}