import type { SpdyGoAwayFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyGoAwayFrame.d.ts'
import type { SpdySessionStatus } from '../../../../../io/netty/handler/codec/spdy/SpdySessionStatus.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultSpdyGoAwayFrame extends Object implements SpdyGoAwayFrame {
    constructor(arg0: number)
    constructor(arg0: number, arg1: SpdySessionStatus)
    constructor(arg0: number, arg1: number)
    // private lastGoodStreamId: number;
    // private status: SpdySessionStatus;
    lastGoodStreamId(): number;
    setLastGoodStreamId(arg0: number): SpdyGoAwayFrame;
    setStatus(arg0: SpdySessionStatus): SpdyGoAwayFrame;
    status(): SpdySessionStatus;
    toString(): string;
}