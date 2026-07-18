import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
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
export interface Http2Connection extends Object{
    addListener(arg0: Http2Connection$Listener): void;
    close(arg0: Promise<void>): Future<void>;
    connectionStream(): Http2Stream;
    forEachActiveStream(arg0: Http2StreamVisitor): Http2Stream;
    goAwayReceived(): boolean;
    goAwayReceived(arg0: number, arg1: number, arg2: ByteBuf): void;
    goAwaySent(): boolean;
    goAwaySent(arg0: number, arg1: number, arg2: ByteBuf): boolean;
    isServer(): boolean;
    local(): Http2Connection$Endpoint<Http2LocalFlowController>;
    newKey(): Http2Connection$PropertyKey;
    numActiveStreams(): number;
    remote(): Http2Connection$Endpoint<Http2RemoteFlowController>;
    removeListener(arg0: Http2Connection$Listener): void;
    stream(arg0: number): Http2Stream;
    streamMayHaveExisted(arg0: number): boolean;
}