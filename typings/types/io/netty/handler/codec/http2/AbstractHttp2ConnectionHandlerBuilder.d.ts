import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2ConnectionHandler } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionHandler.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameLogger } from '../../../../../io/netty/handler/codec/http2/Http2FrameLogger.d.ts'
import type { Http2HeadersEncoder$SensitivityDetector } from '../../../../../io/netty/handler/codec/http2/Http2HeadersEncoder$SensitivityDetector.d.ts'
import type { Http2PromisedRequestVerifier } from '../../../../../io/netty/handler/codec/http2/Http2PromisedRequestVerifier.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractHttp2ConnectionHandlerBuilder<T extends Http2ConnectionHandler, B extends AbstractHttp2ConnectionHandlerBuilder<T, B>> extends Object {
    constructor()
    // private autoAckPingFrame: boolean;
    // private autoAckSettingsFrame: boolean;
    // private connection: Http2Connection;
    // private decoder: Http2ConnectionDecoder;
    // private decoupleCloseAndGoAway: boolean;
    // private encoder: Http2ConnectionEncoder;
    // private encoderEnforceMaxConcurrentStreams: boolean;
    // private encoderIgnoreMaxHeaderListSize: boolean;
    // private flushPreface: boolean;
    // private frameListener: Http2FrameListener;
    // private frameLogger: Http2FrameLogger;
    // private gracefulShutdownTimeoutMillis: number;
    // private headerSensitivityDetector: Http2HeadersEncoder$SensitivityDetector;
    // private initialSettings: JavaMap<any, any>;
    // private isServer: boolean;
    // private maxConsecutiveEmptyFrames: number;
    // private maxDecodedRstFramesPerWindow: number;
    // private maxDecodedRstFramesSecondsPerWindow: number;
    // private maxEncodedRstFramesPerWindow: number;
    // private maxEncodedRstFramesSecondsPerWindow: number;
    // private maxQueuedControlFrames: number;
    // private maxReservedStreams: number;
    // private maxSmallContinuationFrames: number;
    // private promisedRequestVerifier: Http2PromisedRequestVerifier;
    // private validateHeaders: boolean;
    // private validateRequiredPseudoHeaders: boolean;
    autoAckPingFrame(arg0: boolean): B;
    autoAckSettingsFrame(arg0: boolean): B;
    build(): T;
    build(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder, arg2: JavaMap<any, any>): T;
    // private buildFromCodec(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder): T;
    // private buildFromConnection(arg0: Http2Connection): T;
    codec(arg0: Http2ConnectionDecoder, arg1: Http2ConnectionEncoder): B;
    connection(): Http2Connection;
    connection(arg0: Http2Connection): B;
    decoder(): Http2ConnectionDecoder;
    decoderEnforceMaxConsecutiveEmptyDataFrames(): number;
    decoderEnforceMaxConsecutiveEmptyDataFrames(arg0: number): B;
    decoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): B;
    decoderEnforceMaxSmallContinuationFrames(): number;
    decoderEnforceMaxSmallContinuationFrames(arg0: number): B;
    decoupleCloseAndGoAway(): boolean;
    decoupleCloseAndGoAway(arg0: boolean): B;
    encoder(): Http2ConnectionEncoder;
    encoderEnforceMaxConcurrentStreams(): boolean;
    encoderEnforceMaxConcurrentStreams(arg0: boolean): B;
    encoderEnforceMaxQueuedControlFrames(): number;
    encoderEnforceMaxQueuedControlFrames(arg0: number): B;
    encoderEnforceMaxRstFramesPerWindow(arg0: number, arg1: number): B;
    encoderIgnoreMaxHeaderListSize(arg0: boolean): B;
    // private enforceNonCodecConstraints(arg0: string): void;
    flushPreface(): boolean;
    flushPreface(arg0: boolean): B;
    frameListener(): Http2FrameListener;
    frameListener(arg0: Http2FrameListener): B;
    frameLogger(): Http2FrameLogger;
    frameLogger(arg0: Http2FrameLogger): B;
    gracefulShutdownTimeoutMillis(): number;
    gracefulShutdownTimeoutMillis(arg0: number): B;
    headerSensitivityDetector(): Http2HeadersEncoder$SensitivityDetector;
    headerSensitivityDetector(arg0: Http2HeadersEncoder$SensitivityDetector): B;
    initialHuffmanDecodeCapacity(arg0: number): B;
    initialSettings(): JavaMap<any, any>;
    initialSettings(arg0: JavaMap<any, any>): B;
    isAutoAckPingFrame(): boolean;
    isAutoAckSettingsFrame(): boolean;
    isServer(): boolean;
    isValidateHeaders(): boolean;
    isValidateRequiredPseudoHeaders(): boolean;
    maxReservedStreams(): number;
    maxReservedStreams(arg0: number): B;
    promisedRequestVerifier(): Http2PromisedRequestVerifier;
    promisedRequestVerifier(arg0: Http2PromisedRequestVerifier): B;
    self(): B;
    server(arg0: boolean): B;
    validateHeaders(arg0: boolean): B;
    validateRequiredPseudoHeaders(arg0: boolean): B;
}