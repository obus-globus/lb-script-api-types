import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { DefaultHttp2FrameReader$HeadersContinuation } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2FrameReader$HeadersContinuation.d.ts'
import type { Http2Flags } from '../../../../../io/netty/handler/codec/http2/Http2Flags.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameReader } from '../../../../../io/netty/handler/codec/http2/Http2FrameReader.d.ts'
import type { Http2FrameReader$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2FrameReader$Configuration.d.ts'
import type { Http2FrameSizePolicy } from '../../../../../io/netty/handler/codec/http2/Http2FrameSizePolicy.d.ts'
import type { Http2HeadersDecoder } from '../../../../../io/netty/handler/codec/http2/Http2HeadersDecoder.d.ts'
import type { Http2HeadersDecoder$Configuration } from '../../../../../io/netty/handler/codec/http2/Http2HeadersDecoder$Configuration.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2FrameReader extends Object implements Http2FrameReader, Http2FrameReader$Configuration, Http2FrameSizePolicy {
    constructor()
    constructor(arg0: Http2HeadersDecoder)
    constructor(arg0: Http2HeadersDecoder, arg1: number)
    constructor(arg0: boolean)
    // private flags: Http2Flags;
    // private frameType: number;
    // private headersContinuation: DefaultHttp2FrameReader$HeadersContinuation;
    // private headersDecoder: Http2HeadersDecoder;
    // private maxFrameSize: number;
    // private maxSmallContinuationFrames: number;
    // private payloadLength: number;
    // private readError: boolean;
    // private readingHeaders: boolean;
    // private streamId: number;
    close(): void;
    // private closeHeadersContinuation(): void;
    configuration(): Http2FrameReader$Configuration;
    frameSizePolicy(): Http2FrameSizePolicy;
    headersConfiguration(): Http2HeadersDecoder$Configuration;
    maxFrameSize(): number;
    maxFrameSize(arg0: number): void;
    // private preProcessFrame(arg0: ByteBuf): boolean;
    // private processPayloadState(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private readContinuationFrame(arg0: ByteBuf, arg1: Http2FrameListener): void;
    // private readDataFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    readFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private readGoAwayFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private readHeadersFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private readPadding(arg0: ByteBuf): number;
    // private readPingFrame(arg0: ChannelHandlerContext, arg1: number, arg2: Http2FrameListener): void;
    // private readPriorityFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private readPushPromiseFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private readRstStreamFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private readSettingsFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private readUnknownFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private readWindowUpdateFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Http2FrameListener): void;
    // private resetHeadersContinuationIfEnd(arg0: boolean): void;
    // private verifyAssociatedWithAStream(): void;
    // private verifyContinuationFrame(): void;
    // private verifyDataFrame(): void;
    // private verifyFrameState(): void;
    // private verifyGoAwayFrame(): void;
    // private verifyHeadersFrame(): void;
    // private verifyNotProcessingHeaders(): void;
    // private verifyPingFrame(): void;
    // private verifyPriorityFrame(): void;
    // private verifyPushPromiseFrame(): void;
    // private verifyRstStreamFrame(): void;
    // private verifySettingsFrame(): void;
    // private verifyUnknownFrame(): void;
    // private verifyWindowUpdateFrame(): void;
}