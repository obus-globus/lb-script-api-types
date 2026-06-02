import type { DefaultSpdyStreamFrame } from '../../../../../io/netty/handler/codec/spdy/DefaultSpdyStreamFrame.d.ts'
import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultSpdyHeadersFrame extends DefaultSpdyStreamFrame implements SpdyHeadersFrame {
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    // private headers: (Object | null)[];
    readonly invalid: boolean;
    readonly truncated: boolean;
    appendHeaders(arg0: StringBuilder): void;
    headers(): (Object | null)[];
    isInvalid(): boolean;
    isTruncated(): boolean;
    setInvalid(): SpdyHeadersFrame;
    setLast(arg0: boolean): SpdyHeadersFrame;
    setStreamId(arg0: number): SpdyHeadersFrame;
    setTruncated(): SpdyHeadersFrame;
    toString(): string;
}