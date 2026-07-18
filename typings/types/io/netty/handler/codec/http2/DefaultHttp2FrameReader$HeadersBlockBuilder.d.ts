import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { DefaultHttp2FrameReader } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2FrameReader.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2FrameReader$HeadersBlockBuilder extends Object {
    constructor(null_: DefaultHttp2FrameReader)
    // private headerBlock: ByteBuf;
    // private numSmallFragments: number;
    addFragment(arg0: ByteBuf, arg1: number, arg2: ByteBufAllocator, arg3: boolean): void;
    close(): void;
    // private headerSizeExceeded(): void;
    headers(): (Object | null)[];
    numSmallFragments(): number;
}