import type { AbstractHttp2StreamFrame } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamFrame.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2HeadersFrame } from '../../../../../io/netty/handler/codec/http2/Http2HeadersFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2HeadersFrame extends AbstractHttp2StreamFrame implements Http2HeadersFrame {
    constructor(arg0: (Object | null)[])
    constructor(arg0: (Object | null)[], arg1: boolean)
    constructor(arg0: (Object | null)[], arg1: boolean, arg2: number)
    readonly endStream: boolean;
    // private headers: (Object | null)[];
    // private padding: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    headers(): (Object | null)[];
    isEndStream(): boolean;
    name(): string;
    padding(): number;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): DefaultHttp2HeadersFrame;
    toString(): string;
}