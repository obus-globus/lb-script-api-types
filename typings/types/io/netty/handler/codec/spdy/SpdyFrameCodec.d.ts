import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { ChannelOutboundHandler } from '../../../../../io/netty/channel/ChannelOutboundHandler.d.ts'
import type { ChannelPromise } from '../../../../../io/netty/channel/ChannelPromise.d.ts'
import type { ByteToMessageDecoder } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder.d.ts'
import type { ByteToMessageDecoder$Cumulator } from '../../../../../io/netty/handler/codec/ByteToMessageDecoder$Cumulator.d.ts'
import type { SpdyFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyFrame.d.ts'
import type { SpdyFrameDecoder } from '../../../../../io/netty/handler/codec/spdy/SpdyFrameDecoder.d.ts'
import type { SpdyFrameDecoderDelegate } from '../../../../../io/netty/handler/codec/spdy/SpdyFrameDecoderDelegate.d.ts'
import type { SpdyFrameEncoder } from '../../../../../io/netty/handler/codec/spdy/SpdyFrameEncoder.d.ts'
import type { SpdyHeaderBlockDecoder } from '../../../../../io/netty/handler/codec/spdy/SpdyHeaderBlockDecoder.d.ts'
import type { SpdyHeaderBlockEncoder } from '../../../../../io/netty/handler/codec/spdy/SpdyHeaderBlockEncoder.d.ts'
import type { SpdyHeadersFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyHeadersFrame.d.ts'
import type { SpdySettingsFrame } from '../../../../../io/netty/handler/codec/spdy/SpdySettingsFrame.d.ts'
import type { SpdyVersion } from '../../../../../io/netty/handler/codec/spdy/SpdyVersion.d.ts'
import type { SocketAddress } from '../../../../../java/net/SocketAddress.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SpdyFrameCodec extends ByteToMessageDecoder implements ChannelOutboundHandler, SpdyFrameDecoderDelegate {
    static COMPOSITE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    static MERGE_CUMULATOR: ByteToMessageDecoder$Cumulator;
    constructor(arg0: SpdyVersion)
    constructor(arg0: SpdyVersion, arg1: boolean)
    constructor(arg0: SpdyVersion, arg1: number, arg2: SpdyHeaderBlockDecoder, arg3: SpdyHeaderBlockEncoder, arg4: boolean)
    constructor(arg0: SpdyVersion, arg1: number, arg2: SpdyHeaderBlockDecoder, arg3: SpdyHeaderBlockEncoder, arg4: boolean, arg5: boolean)
    constructor(arg0: SpdyVersion, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: SpdyVersion, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean)
    constructor(arg0: SpdyVersion, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean, arg7: boolean)
    // private ctx: ChannelHandlerContext;
    // private read: boolean;
    // private spdyFrameDecoder: SpdyFrameDecoder;
    // private spdyFrameEncoder: SpdyFrameEncoder;
    // private spdyHeaderBlockDecoder: SpdyHeaderBlockDecoder;
    // private spdyHeaderBlockEncoder: SpdyHeaderBlockEncoder;
    // private spdyHeadersFrame: SpdyHeadersFrame;
    // private spdySettingsFrame: SpdySettingsFrame;
    // private supportsUnknownFrames: boolean;
    // private validateHeaders: boolean;
    bind(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: ChannelPromise): void;
    channelReadComplete(arg0: ChannelHandlerContext): void;
    close(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    connect(arg0: ChannelHandlerContext, arg1: SocketAddress, arg2: SocketAddress, arg3: ChannelPromise): void;
    createDecoder(arg0: SpdyVersion, arg1: SpdyFrameDecoderDelegate, arg2: number): SpdyFrameDecoder;
    createEncoder(arg0: SpdyVersion): SpdyFrameEncoder;
    decode(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    deregister(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    disconnect(arg0: ChannelHandlerContext, arg1: ChannelPromise): void;
    flush(arg0: ChannelHandlerContext): void;
    handlerAdded(arg0: ChannelHandlerContext): void;
    isValidUnknownFrameHeader(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    newSpdyUnknownFrame(arg0: number, arg1: number, arg2: ByteBuf): SpdyFrame;
    read(arg0: ChannelHandlerContext): void;
    readDataFrame(arg0: number, arg1: boolean, arg2: ByteBuf): void;
    readFrameError(arg0: string): void;
    readGoAwayFrame(arg0: number, arg1: number): void;
    readHeaderBlock(arg0: ByteBuf): void;
    readHeaderBlockEnd(): void;
    readHeadersFrame(arg0: number, arg1: boolean): void;
    readPingFrame(arg0: number): void;
    readRstStreamFrame(arg0: number, arg1: number): void;
    readSetting(arg0: number, arg1: number, arg2: boolean, arg3: boolean): void;
    readSettingsEnd(): void;
    readSettingsFrame(arg0: boolean): void;
    readSynReplyFrame(arg0: number, arg1: boolean): void;
    readSynStreamFrame(arg0: number, arg1: number, arg2: number, arg3: boolean, arg4: boolean): void;
    readUnknownFrame(arg0: number, arg1: number, arg2: ByteBuf): void;
    readWindowUpdateFrame(arg0: number, arg1: number): void;
    write(arg0: ChannelHandlerContext, arg1: Object, arg2: ChannelPromise): void;
}