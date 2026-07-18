import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AbstractHttp2ConnectionHandlerBuilder } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2ConnectionHandlerBuilder.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2FrameCodec } from '../../../../../io/netty/handler/codec/http2/Http2FrameCodec.d.ts'
import type { Http2FrameLogger } from '../../../../../io/netty/handler/codec/http2/Http2FrameLogger.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2HeadersEncoder$SensitivityDetector } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$SensitivityDetector.d.ts'
export class Http2FrameCodecBuilder extends AbstractHttp2ConnectionHandlerBuilder<Http2FrameCodec, Http2FrameCodecBuilder> {
    static forClient(): Http2FrameCodecBuilder;
    static forServer(): Http2FrameCodecBuilder;
    constructor()
    constructor(arg0: boolean)
    // private frameWriter: Http2FrameWriter;
    autoAckPingFrame(arg0: boolean): Http2FrameCodecBuilder;
    autoAckSettingsFrame(arg0: boolean): Http2FrameCodecBuilder;
    build(): Http2FrameCodec;
    build(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>): Http2FrameCodec;
    decoderEnforceMaxConsecutiveEmptyDataFrames(): number;
    decoderEnforceMaxConsecutiveEmptyDataFrames(arg0: number): Http2FrameCodecBuilder;
    decoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): Http2FrameCodecBuilder;
    decoderEnforceMaxSmallContinuationFrames(): number;
    decoderEnforceMaxSmallContinuationFrames(arg0: number): Http2FrameCodecBuilder;
    decoupleCloseAndGoAway(): boolean;
    decoupleCloseAndGoAway(arg0: boolean): Http2FrameCodecBuilder;
    encoderEnforceMaxConcurrentStreams(): boolean;
    encoderEnforceMaxConcurrentStreams(arg0: boolean): Http2FrameCodecBuilder;
    encoderEnforceMaxQueuedControlFrames(): number;
    encoderEnforceMaxQueuedControlFrames(arg0: number): Http2FrameCodecBuilder;
    encoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): Http2FrameCodecBuilder;
    encoderIgnoreMaxHeaderListSize(arg0: boolean): Http2FrameCodecBuilder;
    flushPreface(): boolean;
    flushPreface(arg0: boolean): Http2FrameCodecBuilder;
    frameLogger(): Http2FrameLogger;
    frameLogger(arg0: Http2FrameLogger): Http2FrameCodecBuilder;
    frameWriter(arg0: Http2FrameWriter): Http2FrameCodecBuilder;
    gracefulShutdownTimeoutMillis(): number;
    gracefulShutdownTimeoutMillis(arg0: number): Http2FrameCodecBuilder;
    headerSensitivityDetector(): Http2HeadersEncoder$SensitivityDetector;
    headerSensitivityDetector(arg0: Http2HeadersEncoder$SensitivityDetector): Http2FrameCodecBuilder;
    initialHuffmanDecodeCapacity(arg0: number): Http2FrameCodecBuilder;
    initialSettings(): JavaMap<any, any>;
    initialSettings(arg0: JavaMap<any, any>): Http2FrameCodecBuilder;
    isServer(): boolean;
    isValidateHeaders(): boolean;
    maxReservedStreams(): number;
    maxReservedStreams(arg0: number): Http2FrameCodecBuilder;
    validateHeaders(arg0: boolean): Http2FrameCodecBuilder;
}