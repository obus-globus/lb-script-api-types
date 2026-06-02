import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultSpdyStreamFrame } from '../../../../../io/netty/handler/codec/spdy/DefaultSpdyStreamFrame.d.ts'
import type { SpdyDataFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyDataFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultSpdyDataFrame extends DefaultSpdyStreamFrame implements SpdyDataFrame {
    constructor(arg0: number)
    constructor(arg0: number, arg1: ByteBuf)
    // private data: ByteBuf;
    content(): ByteBuf;
    copy(): SpdyDataFrame;
    duplicate(): SpdyDataFrame;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): SpdyDataFrame;
    retain(): SpdyDataFrame;
    retain(arg0: number): SpdyDataFrame;
    retainedDuplicate(): SpdyDataFrame;
    setLast(arg0: boolean): SpdyDataFrame;
    setStreamId(arg0: number): SpdyDataFrame;
    toString(): string;
    touch(): SpdyDataFrame;
    touch(arg0: Object): SpdyDataFrame;
}