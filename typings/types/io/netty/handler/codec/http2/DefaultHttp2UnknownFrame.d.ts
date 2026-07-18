import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultByteBufHolder } from '../../../../../io/netty/buffer/DefaultByteBufHolder.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { Http2FrameStream } from '../../../../../io/netty/handler/codec/http2/Http2FrameStream.d.ts'
import type { Http2UnknownFrame } from '../../../../../io/netty/handler/codec/http2/Http2UnknownFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2UnknownFrame extends DefaultByteBufHolder implements Http2UnknownFrame {
    constructor(arg0: number, arg1: Http2Flags)
    constructor(arg0: number, arg1: Http2Flags, arg2: ByteBuf)
    // private flags: Http2Flags;
    // private frameType: number;
    // private stream: Http2FrameStream;
    copy(): DefaultHttp2UnknownFrame;
    duplicate(): DefaultHttp2UnknownFrame;
    equals(arg0: Object | null): boolean;
    flags(): Http2Flags;
    frameType(): number;
    hashCode(): number;
    name(): string;
    replace(arg0: ByteBuf): DefaultHttp2UnknownFrame;
    retain(): DefaultHttp2UnknownFrame;
    retain(arg0: number): DefaultHttp2UnknownFrame;
    retainedDuplicate(): DefaultHttp2UnknownFrame;
    stream(): Http2FrameStream;
    stream(arg0: Http2FrameStream): DefaultHttp2UnknownFrame;
    toString(): string;
    touch(): DefaultHttp2UnknownFrame;
    touch(arg0: Object): DefaultHttp2UnknownFrame;
}