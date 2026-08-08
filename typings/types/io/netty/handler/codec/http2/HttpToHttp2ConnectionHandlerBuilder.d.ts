import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { HttpScheme } from '../../../../../io/netty/handler/codec/http/HttpScheme.d.ts'
import type { AbstractHttp2ConnectionHandlerBuilder } from '../../../../../io/netty/handler/codec/http2/AbstractHttp2ConnectionHandlerBuilder.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameLogger } from '../../../../../io/netty/handler/codec/http2/Http2FrameLogger.d.ts'
import type { Http2HeadersEncoder$SensitivityDetector } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$SensitivityDetector.d.ts'
import type { HttpToHttp2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/HttpToHttp2ConnectionHandler.d.ts'
export class HttpToHttp2ConnectionHandlerBuilder extends AbstractHttp2ConnectionHandlerBuilder<HttpToHttp2ConnectionHandler, HttpToHttp2ConnectionHandlerBuilder> {
    constructor()
    // private httpScheme: HttpScheme;
    build(): HttpToHttp2ConnectionHandler;
    build(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>): HttpToHttp2ConnectionHandler;
    codec(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder): HttpToHttp2ConnectionHandlerBuilder;
    connection(): Http2Connection;
    connection(arg0: Http2Connection): HttpToHttp2ConnectionHandlerBuilder;
    decoderEnforceMaxConsecutiveEmptyDataFrames(): number;
    decoderEnforceMaxConsecutiveEmptyDataFrames(arg0: number): HttpToHttp2ConnectionHandlerBuilder;
    decoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): HttpToHttp2ConnectionHandlerBuilder;
    decoupleCloseAndGoAway(): boolean;
    decoupleCloseAndGoAway(arg0: boolean): HttpToHttp2ConnectionHandlerBuilder;
    encoderEnforceMaxConcurrentStreams(): boolean;
    encoderEnforceMaxConcurrentStreams(arg0: boolean): HttpToHttp2ConnectionHandlerBuilder;
    encoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): HttpToHttp2ConnectionHandlerBuilder;
    encoderIgnoreMaxHeaderListSize(arg0: boolean): HttpToHttp2ConnectionHandlerBuilder;
    flushPreface(): boolean;
    flushPreface(arg0: boolean): HttpToHttp2ConnectionHandlerBuilder;
    frameListener(): Http2FrameListener;
    frameListener(arg0: Http2FrameListener): HttpToHttp2ConnectionHandlerBuilder;
    frameLogger(): Http2FrameLogger;
    frameLogger(arg0: Http2FrameLogger): HttpToHttp2ConnectionHandlerBuilder;
    gracefulShutdownTimeoutMillis(): number;
    gracefulShutdownTimeoutMillis(arg0: number): HttpToHttp2ConnectionHandlerBuilder;
    headerSensitivityDetector(): Http2HeadersEncoder$SensitivityDetector;
    headerSensitivityDetector(arg0: Http2HeadersEncoder$SensitivityDetector): HttpToHttp2ConnectionHandlerBuilder;
    httpScheme(arg0: HttpScheme): HttpToHttp2ConnectionHandlerBuilder;
    initialHuffmanDecodeCapacity(arg0: number): HttpToHttp2ConnectionHandlerBuilder;
    initialSettings(): JavaMap<any, any>;
    initialSettings(arg0: JavaMap<any, any>): HttpToHttp2ConnectionHandlerBuilder;
    server(arg0: boolean): HttpToHttp2ConnectionHandlerBuilder;
    validateHeaders(arg0: boolean): HttpToHttp2ConnectionHandlerBuilder;
    validateRequiredPseudoHeaders(arg0: boolean): HttpToHttp2ConnectionHandlerBuilder;
}