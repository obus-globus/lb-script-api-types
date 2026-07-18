import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufHolder } from '../../../../../io/netty/buffer/ByteBufHolder.d.ts'
import type { Http2Frame } from '../../../../../io/netty/handler/codec/http2/Http2Frame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2GoAwayFrame extends ByteBufHolder, Http2Frame, Object{
    content(): ByteBuf;
    copy(): Http2GoAwayFrame;
    duplicate(): Http2GoAwayFrame;
    errorCode(): number;
    extraStreamIds(): number;
    lastStreamId(): number;
    name(): string;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): Http2GoAwayFrame;
    retain(): Http2GoAwayFrame;
    retain(arg0: number): Http2GoAwayFrame;
    retainedDuplicate(): Http2GoAwayFrame;
    setExtraStreamIds(arg0: number): Http2GoAwayFrame;
    touch(): Http2GoAwayFrame;
    touch(arg0: Object): Http2GoAwayFrame;
}