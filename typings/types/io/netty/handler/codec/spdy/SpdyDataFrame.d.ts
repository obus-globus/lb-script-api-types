import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { SpdyStreamFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyStreamFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdyDataFrame extends ByteBufHolder, SpdyStreamFrame, Object{
    content(): ByteBuf;
    copy(): SpdyDataFrame;
    duplicate(): SpdyDataFrame;
    replace(arg0: ByteBuf): SpdyDataFrame;
    retain(): SpdyDataFrame;
    retain(arg0: number): SpdyDataFrame;
    retainedDuplicate(): SpdyDataFrame;
    setLast(arg0: boolean): SpdyDataFrame;
    setStreamId(arg0: number): SpdyDataFrame;
    touch(): SpdyDataFrame;
    touch(arg0: Object): SpdyDataFrame;
}