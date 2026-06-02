import type { SpdyPingFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyPingFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultSpdyPingFrame extends Object implements SpdyPingFrame {
    constructor(arg0: number)
    // private id: number;
    id(): number;
    setId(arg0: number): SpdyPingFrame;
    toString(): string;
}