import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AbstractHttp2ConnectionHandlerBuilder } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2ConnectionHandlerBuilder.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameLogger } from '../../../../../io/netty/handler/codec/http2/Http2FrameLogger.d.ts'
import type { Http2HeadersEncoder$SensitivityDetector } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$SensitivityDetector.d.ts'
export class Http2ConnectionHandlerBuilder extends AbstractHttp2ConnectionHandlerBuilder<Http2ConnectionHandler, Http2ConnectionHandlerBuilder> {
    constructor()
    build(): Http2ConnectionHandler;
    build(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>): Http2ConnectionHandler;
    codec(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder): Http2ConnectionHandlerBuilder;
    connection(): Http2Connection;
    connection(arg0: Http2Connection): Http2ConnectionHandlerBuilder;
    decoderEnforceMaxConsecutiveEmptyDataFrames(): number;
    decoderEnforceMaxConsecutiveEmptyDataFrames(arg0: number): Http2ConnectionHandlerBuilder;
    decoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): Http2ConnectionHandlerBuilder;
    decoupleCloseAndGoAway(): boolean;
    decoupleCloseAndGoAway(arg0: boolean): Http2ConnectionHandlerBuilder;
    encoderEnforceMaxConcurrentStreams(): boolean;
    encoderEnforceMaxConcurrentStreams(arg0: boolean): Http2ConnectionHandlerBuilder;
    encoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): Http2ConnectionHandlerBuilder;
    encoderIgnoreMaxHeaderListSize(arg0: boolean): Http2ConnectionHandlerBuilder;
    flushPreface(): boolean;
    flushPreface(arg0: boolean): Http2ConnectionHandlerBuilder;
    frameListener(): Http2FrameListener;
    frameListener(arg0: Http2FrameListener): Http2ConnectionHandlerBuilder;
    frameLogger(): Http2FrameLogger;
    frameLogger(arg0: Http2FrameLogger): Http2ConnectionHandlerBuilder;
    gracefulShutdownTimeoutMillis(): number;
    gracefulShutdownTimeoutMillis(arg0: number): Http2ConnectionHandlerBuilder;
    headerSensitivityDetector(): Http2HeadersEncoder$SensitivityDetector;
    headerSensitivityDetector(arg0: Http2HeadersEncoder$SensitivityDetector): Http2ConnectionHandlerBuilder;
    initialHuffmanDecodeCapacity(arg0: number): Http2ConnectionHandlerBuilder;
    initialSettings(): JavaMap<any, any>;
    initialSettings(arg0: JavaMap<any, any>): Http2ConnectionHandlerBuilder;
    maxReservedStreams(): number;
    maxReservedStreams(arg0: number): Http2ConnectionHandlerBuilder;
    server(arg0: boolean): Http2ConnectionHandlerBuilder;
    validateHeaders(arg0: boolean): Http2ConnectionHandlerBuilder;
    validateRequiredPseudoHeaders(arg0: boolean): Http2ConnectionHandlerBuilder;
}