import type { SpdyWindowUpdateFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyWindowUpdateFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultSpdyWindowUpdateFrame extends Object implements SpdyWindowUpdateFrame {
    constructor(arg0: number, arg1: number)
    // private deltaWindowSize: number;
    // private streamId: number;
    deltaWindowSize(): number;
    setDeltaWindowSize(arg0: number): SpdyWindowUpdateFrame;
    setStreamId(arg0: number): SpdyWindowUpdateFrame;
    streamId(): number;
    toString(): string;
}