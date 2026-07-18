import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultHttp2Connection$ActiveStreams } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$ActiveStreams.d.ts'
import type { DefaultHttp2Connection$ConnectionStream } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$ConnectionStream.d.ts'
import type { DefaultHttp2Connection$DefaultEndpoint } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultEndpoint.d.ts'
import type { DefaultHttp2Connection$DefaultPropertyKey } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultPropertyKey.d.ts'
import type { DefaultHttp2Connection$DefaultStream } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultStream.d.ts'
import type { DefaultHttp2Connection$PropertyKeyRegistry } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$PropertyKeyRegistry.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { Http2Connection$Endpoint } from '../../../../../io/netty/handler/codec/http2/Http2Connection$Endpoint.d.ts'
import type { Http2Connection$Listener } from '../../../../../io/netty/handler/codec/http2/Http2Connection$Listener.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2LocalFlowController } from '../../../../../io/netty/handler/codec/http2/Http2LocalFlowController.d.ts'
import type { Http2RemoteFlowController } from '../../../../../io/netty/handler/codec/http2/Http2RemoteFlowController.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Http2StreamVisitor } from '../../../../../io/netty/handler/codec/http2/Http2StreamVisitor.d.ts'
import type { Future } from '../../../../../io/netty/util/concurrent/Future.d.ts'
import type { Promise } from '../../../../../io/netty/util/concurrent/Promise.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class DefaultHttp2Connection extends Object implements Http2Connection {
    constructor(arg0: boolean)
    constructor(arg0: boolean, arg1: number)
    // private activeStreams: DefaultHttp2Connection$ActiveStreams;
    // private closePromise: Promise<void>;
    // private connectionStream: DefaultHttp2Connection$ConnectionStream;
    // private listeners: Http2Connection$Listener[];
    // private localEndpoint: DefaultHttp2Connection$DefaultEndpoint<Http2LocalFlowController>;
    // private propertyKeyRegistry: DefaultHttp2Connection$PropertyKeyRegistry;
    // private remoteEndpoint: DefaultHttp2Connection$DefaultEndpoint<Http2RemoteFlowController>;
    // private streamMap: JavaMap<any, any>;
    addListener(arg0: Http2Connection$Listener): void;
    close(arg0: Promise<void>): Future<void>;
    // private closeStreamsGreaterThanLastKnownStreamId(arg0: number, arg1: DefaultHttp2Connection$DefaultEndpoint<any>): void;
    connectionStream(): Http2Stream;
    forEachActiveStream(arg0: Http2StreamVisitor): Http2Stream;
    goAwayReceived(): boolean;
    goAwayReceived(arg0: number, arg1: number, arg2: ByteBuf): void;
    goAwaySent(): boolean;
    goAwaySent(arg0: number, arg1: number, arg2: ByteBuf): boolean;
    isClosed(): boolean;
    isServer(): boolean;
    // private isStreamMapEmpty(): boolean;
    local(): Http2Connection$Endpoint<Http2LocalFlowController>;
    newKey(): Http2Connection$PropertyKey;
    notifyClosed(arg0: Http2Stream): void;
    notifyHalfClosed(arg0: Http2Stream): void;
    numActiveStreams(): number;
    remote(): Http2Connection$Endpoint<Http2RemoteFlowController>;
    removeListener(arg0: Http2Connection$Listener): void;
    removeStream(arg0: DefaultHttp2Connection$DefaultStream, arg1: Iterator<Object>): void;
    stream(arg0: number): Http2Stream;
    streamMayHaveExisted(arg0: number): boolean;
    verifyKey(arg0: Http2Connection$PropertyKey): DefaultHttp2Connection$DefaultPropertyKey;
}