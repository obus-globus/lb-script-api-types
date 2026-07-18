import type { Http2PingFrame } from '../../../../../io/netty/handler/codec/http2/Http2PingFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2PingFrame extends Object implements Http2PingFrame {
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private ack: boolean;
    // private content: number;
    ack(): boolean;
    content(): number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
}