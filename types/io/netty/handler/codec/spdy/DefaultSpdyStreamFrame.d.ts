import type { SpdyStreamFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyStreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DefaultSpdyStreamFrame extends Object implements SpdyStreamFrame {
    constructor(arg0: number)
    readonly last: boolean;
    // private streamId: number;
    isLast(): boolean;
    setLast(arg0: boolean): SpdyStreamFrame;
    setStreamId(arg0: number): SpdyStreamFrame;
    streamId(): number;
}