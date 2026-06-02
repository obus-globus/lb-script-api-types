import type { DefaultSpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/DefaultSpdyHeadersFrame.d.ts'
import type { SpdySynStreamFrame } from '../../../../../io/netty/handler/codec/spdy/SpdySynStreamFrame.d.ts'
export class DefaultSpdySynStreamFrame extends DefaultSpdyHeadersFrame implements SpdySynStreamFrame {
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: boolean)
    // private associatedStreamId: number;
    // private priority: number;
    readonly unidirectional: boolean;
    associatedStreamId(): number;
    isUnidirectional(): boolean;
    priority(): number;
    setAssociatedStreamId(arg0: number): SpdySynStreamFrame;
    setInvalid(): SpdySynStreamFrame;
    setLast(arg0: boolean): SpdySynStreamFrame;
    setPriority(arg0: number): SpdySynStreamFrame;
    setStreamId(arg0: number): SpdySynStreamFrame;
    setUnidirectional(arg0: boolean): SpdySynStreamFrame;
    toString(): string;
}