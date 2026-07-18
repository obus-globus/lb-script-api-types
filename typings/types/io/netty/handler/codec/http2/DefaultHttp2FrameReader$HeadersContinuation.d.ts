import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultHttp2FrameReader } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2FrameReader.d.ts'
import type { DefaultHttp2FrameReader$HeadersBlockBuilder } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2FrameReader$HeadersBlockBuilder.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class DefaultHttp2FrameReader$HeadersContinuation extends Object {
    private constructor(null_: DefaultHttp2FrameReader)
    // private builder: DefaultHttp2FrameReader$HeadersBlockBuilder;
    close(): void;
    getStreamId(): number;
    headersBlockBuilder(): DefaultHttp2FrameReader$HeadersBlockBuilder;
    numSmallFragments(): number;
    processFragment(arg0: boolean, arg1: ByteBuf, arg2: number, arg3: Http2FrameListener): void;
}