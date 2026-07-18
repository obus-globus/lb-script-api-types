import type { Http2FlowController } from '../../../../../io/netty/handler/codec/http2/Http2FlowController.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2Connection$Endpoint<F extends Http2FlowController> extends Object{
    allowPushTo(): boolean;
    allowPushTo(arg0: boolean): void;
    canOpenStream(): boolean;
    createStream(arg0: number, arg1: boolean): Http2Stream;
    created(arg0: Http2Stream): boolean;
    flowController(): F;
    flowController(arg0: F): void;
    incrementAndGetNextStreamId(): number;
    isServer(): boolean;
    isValidStreamId(arg0: number): boolean;
    lastStreamCreated(): number;
    lastStreamKnownByPeer(): number;
    maxActiveStreams(): number;
    maxActiveStreams(arg0: number): void;
    mayHaveCreatedStream(arg0: number): boolean;
    numActiveStreams(): number;
    opposite(): Http2Connection$Endpoint<Http2FlowController>;
    reservePushStream(arg0: number, arg1: Http2Stream): Http2Stream;
}