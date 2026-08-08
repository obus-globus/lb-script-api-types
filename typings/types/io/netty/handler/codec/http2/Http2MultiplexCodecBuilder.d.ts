import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ChannelHandler } from '../../../../../io/netty/channel/ChannelHandler.d.ts'
import type { AbstractHttp2ConnectionHandlerBuilder } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2ConnectionHandlerBuilder.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2FrameLogger } from '../../../../../io/netty/handler/codec/http2/Http2FrameLogger.d.ts'
import type { Http2FrameWriter } from '../../../../../io/netty/handler/codec/http2/Http2FrameWriter.d.ts'
import type { Http2HeadersEncoder$SensitivityDetector } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$SensitivityDetector.d.ts'
import type { Http2MultiplexCodec } from '../../../../../io/netty/handler/codec/http2/Http2MultiplexCodec.d.ts'
export class Http2MultiplexCodecBuilder extends AbstractHttp2ConnectionHandlerBuilder<Http2MultiplexCodec, Http2MultiplexCodecBuilder> {
    static forClient(paramarg0: ChannelHandler): Http2MultiplexCodecBuilder;
    static forServer(paramarg0: ChannelHandler): Http2MultiplexCodecBuilder;
    constructor(arg0: boolean, arg1: ChannelHandler)
    // private childHandler: ChannelHandler;
    // private frameWriter: Http2FrameWriter;
    // private upgradeStreamHandler: ChannelHandler;
    autoAckPingFrame(arg0: boolean): Http2MultiplexCodecBuilder;
    autoAckSettingsFrame(arg0: boolean): Http2MultiplexCodecBuilder;
    build(): Http2MultiplexCodec;
    build(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>): Http2MultiplexCodec;
    decoderEnforceMaxConsecutiveEmptyDataFrames(): number;
    decoderEnforceMaxConsecutiveEmptyDataFrames(arg0: number): Http2MultiplexCodecBuilder;
    decoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): Http2MultiplexCodecBuilder;
    decoderEnforceMaxSmallContinuationFrames(): number;
    decoderEnforceMaxSmallContinuationFrames(arg0: number): Http2MultiplexCodecBuilder;
    decoupleCloseAndGoAway(): boolean;
    decoupleCloseAndGoAway(arg0: boolean): Http2MultiplexCodecBuilder;
    encoderEnforceMaxConcurrentStreams(): boolean;
    encoderEnforceMaxConcurrentStreams(arg0: boolean): Http2MultiplexCodecBuilder;
    encoderEnforceMaxQueuedControlFrames(): number;
    encoderEnforceMaxQueuedControlFrames(arg0: number): Http2MultiplexCodecBuilder;
    encoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): Http2MultiplexCodecBuilder;
    encoderIgnoreMaxHeaderListSize(arg0: boolean): Http2MultiplexCodecBuilder;
    flushPreface(): boolean;
    flushPreface(arg0: boolean): Http2MultiplexCodecBuilder;
    frameLogger(): Http2FrameLogger;
    frameLogger(arg0: Http2FrameLogger): Http2MultiplexCodecBuilder;
    frameWriter(arg0: Http2FrameWriter): Http2MultiplexCodecBuilder;
    gracefulShutdownTimeoutMillis(): number;
    gracefulShutdownTimeoutMillis(arg0: number): Http2MultiplexCodecBuilder;
    headerSensitivityDetector(): Http2HeadersEncoder$SensitivityDetector;
    headerSensitivityDetector(arg0: Http2HeadersEncoder$SensitivityDetector): Http2MultiplexCodecBuilder;
    initialHuffmanDecodeCapacity(arg0: number): Http2MultiplexCodecBuilder;
    initialSettings(): JavaMap<any, any>;
    initialSettings(arg0: JavaMap<any, any>): Http2MultiplexCodecBuilder;
    isServer(): boolean;
    isValidateHeaders(): boolean;
    maxReservedStreams(): number;
    maxReservedStreams(arg0: number): Http2MultiplexCodecBuilder;
    validateHeaders(arg0: boolean): Http2MultiplexCodecBuilder;
    validateRequiredPseudoHeaders(arg0: boolean): Http2MultiplexCodecBuilder;
    withUpgradeStreamHandler(arg0: ChannelHandler): Http2MultiplexCodecBuilder;
}