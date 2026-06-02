import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ByteBufAllocator } from '../../../../../io/netty/buffer/ByteBufAllocator.d.ts'
import type { SpdySettingsFrame } from '../../../../../io/netty/handler/codec/spdy/SpdySettingsFrame.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpdyFrameEncoder extends Object {
    constructor(arg0: SpdyVersion)
    // private version: number;
    encodeDataFrame(arg0: ByteBufAllocator, arg1: number, arg2: boolean, arg3: ByteBuf): ByteBuf;
    encodeGoAwayFrame(arg0: ByteBufAllocator, arg1: number, arg2: number): ByteBuf;
    encodeHeadersFrame(arg0: ByteBufAllocator, arg1: number, arg2: boolean, arg3: ByteBuf): ByteBuf;
    encodePingFrame(arg0: ByteBufAllocator, arg1: number): ByteBuf;
    encodeRstStreamFrame(arg0: ByteBufAllocator, arg1: number, arg2: number): ByteBuf;
    encodeSettingsFrame(arg0: ByteBufAllocator, arg1: SpdySettingsFrame): ByteBuf;
    encodeSynReplyFrame(arg0: ByteBufAllocator, arg1: number, arg2: boolean, arg3: ByteBuf): ByteBuf;
    encodeSynStreamFrame(arg0: ByteBufAllocator, arg1: number, arg2: number, arg3: number, arg4: boolean, arg5: boolean, arg6: ByteBuf): ByteBuf;
    encodeUnknownFrame(arg0: ByteBufAllocator, arg1: number, arg2: number, arg3: ByteBuf): ByteBuf;
    encodeWindowUpdateFrame(arg0: ByteBufAllocator, arg1: number, arg2: number): ByteBuf;
    writeControlFrameHeader(arg0: ByteBuf, arg1: number, arg2: number, arg3: number): void;
}