import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { ChannelHandlerContext } from '../../../../../io/netty/channel/ChannelHandlerContext.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2ConnectionDecoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionDecoder.d.ts'
import type { Http2ConnectionEncoder } from '../../../../../io/netty/handler/codec/http2/Http2ConnectionEncoder.d.ts'
import type { Http2FrameListener } from '../../../../../io/netty/handler/codec/http2/Http2FrameListener.d.ts'
import type { Http2FrameReader } from '../../../../../io/netty/handler/codec/http2/Http2FrameReader.d.ts'
import type { Http2LifecycleManager } from '../../../../../io/netty/handler/codec/http2/Http2LifecycleManager.d.ts'
import type { Http2LocalFlowController } from '../../../../../io/netty/handler/codec/http2/Http2LocalFlowController.d.ts'
import type { Http2PromisedRequestVerifier } from '../../../../../io/netty/handler/codec/http2/Http2PromisedRequestVerifier.d.ts'
import type { Http2SettingsReceivedConsumer } from '../../../../../io/netty/handler/codec/http2/Http2SettingsReceivedConsumer.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2ConnectionDecoder extends Object implements Http2ConnectionDecoder {
    constructor(arg0: Http2Connection, arg1: Http2ConnectionEncoder, arg2: Http2FrameReader)
    constructor(arg0: Http2Connection, arg1: Http2ConnectionEncoder, arg2: Http2FrameReader, arg3: Http2PromisedRequestVerifier)
    constructor(arg0: Http2Connection, arg1: Http2ConnectionEncoder, arg2: Http2FrameReader, arg3: Http2PromisedRequestVerifier, arg4: boolean)
    constructor(arg0: Http2Connection, arg1: Http2ConnectionEncoder, arg2: Http2FrameReader, arg3: Http2PromisedRequestVerifier, arg4: boolean, arg5: boolean)
    constructor(arg0: Http2Connection, arg1: Http2ConnectionEncoder, arg2: Http2FrameReader, arg3: Http2PromisedRequestVerifier, arg4: boolean, arg5: boolean, arg6: boolean)
    // private autoAckPing: boolean;
    // private connection: Http2Connection;
    // private contentLengthKey: Http2Connection$PropertyKey;
    // private encoder: Http2ConnectionEncoder;
    // private frameReader: Http2FrameReader;
    // private internalFrameListener: Http2FrameListener;
    // private lifecycleManager: Http2LifecycleManager;
    // private listener: Http2FrameListener;
    // private requestVerifier: Http2PromisedRequestVerifier;
    // private settingsReceivedConsumer: Http2SettingsReceivedConsumer;
    // private validateHeaders: boolean;
    calculateMaxHeaderListSizeGoAway(arg0: number): number;
    close(): void;
    connection(): Http2Connection;
    decodeFrame(arg0: ChannelHandlerContext, arg1: ByteBuf, arg2: Object[]): void;
    flowController(): Http2LocalFlowController;
    frameListener(): Http2FrameListener;
    frameListener(arg0: Http2FrameListener): void;
    lifecycleManager(arg0: Http2LifecycleManager): void;
    localSettings(): JavaMap<any, any>;
    onGoAwayRead0(arg0: ChannelHandlerContext, arg1: number, arg2: number, arg3: ByteBuf): void;
    prefaceReceived(): boolean;
    // private unconsumedBytes(arg0: Http2Stream): number;
    // private verifyContentLength(arg0: Http2Stream, arg1: number, arg2: boolean): void;
}