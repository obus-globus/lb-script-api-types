import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractHttp2StreamFrame } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2StreamFrame.d.ts'
import type { Http2DataFrame } from '../../../../../io/netty/handler/codec/http2/Http2DataFrame.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2DataFrame extends AbstractHttp2StreamFrame implements Http2DataFrame {
    constructor(arg0: ByteBuf)
    constructor(arg0: ByteBuf, arg1: boolean)
    constructor(arg0: ByteBuf, arg1: boolean, arg2: number)
    constructor(arg0: boolean)
    // private content: ByteBuf;
    readonly endStream: boolean;
    // private initialFlowControlledBytes: number;
    // private padding: number;
    content(): ByteBuf;
    copy(): DefaultHttp2DataFrame;
    duplicate(): DefaultHttp2DataFrame;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    initialFlowControlledBytes(): number;
    isEndStream(): boolean;
    name(): string;
    padding(): number;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): DefaultHttp2DataFrame;
    retain(): DefaultHttp2DataFrame;
    retain(arg0: number): DefaultHttp2DataFrame;
    retainedDuplicate(): DefaultHttp2DataFrame;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): DefaultHttp2DataFrame;
    toString(): string;
    touch(): DefaultHttp2DataFrame;
    touch(arg0: Object): DefaultHttp2DataFrame;
}