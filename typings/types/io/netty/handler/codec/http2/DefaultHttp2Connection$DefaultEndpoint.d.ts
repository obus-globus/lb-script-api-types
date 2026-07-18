import type { DefaultHttp2Connection } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection.d.ts'
import type { DefaultHttp2Connection$DefaultStream } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultStream.d.ts'
import type { Http2Connection$Endpoint } from '../../../../../io/netty/handler/codec/http2/Http2Connection$Endpoint.d.ts'
import type { Http2FlowController } from '../../../../../io/netty/handler/codec/http2/Http2FlowController.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Http2Stream$State } from '../../../../../io/netty/handler/codec/http2/Http2Stream$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2Connection$DefaultEndpoint<F extends Http2FlowController> extends Object implements Http2Connection$Endpoint<F> {
    constructor(null_: DefaultHttp2Connection, arg1: boolean, arg2: number)
    // private flowController: F;
    // private lastCreatedStreamIdentity: number;
    // private lastStreamKnownByPeer: number;
    // private maxActiveStreams: number;
    // private maxReservedStreams: number;
    // private maxStreams: number;
    // private nextReservationStreamId: number;
    // private nextStreamIdToCreate: number;
    // private numActiveStreams: number;
    // private numStreams: number;
    // private pushToAllowed: boolean;
    readonly server: boolean;
    // private addStream(arg0: DefaultHttp2Connection$DefaultStream): void;
    allowPushTo(): boolean;
    allowPushTo(arg0: boolean): void;
    canOpenStream(): boolean;
    // private checkNewStreamAllowed(arg0: number, arg1: Http2Stream$State): void;
    createStream(arg0: number, arg1: boolean): DefaultHttp2Connection$DefaultStream;
    created(arg0: Http2Stream): boolean;
    flowController(): F;
    flowController(arg0: F): void;
    incrementAndGetNextStreamId(): number;
    // private incrementExpectedStreamId(arg0: number): void;
    // private isLocal(): boolean;
    isServer(): boolean;
    isValidStreamId(arg0: number): boolean;
    lastStreamCreated(): number;
    lastStreamKnownByPeer(): number;
    // private lastStreamKnownByPeer(arg0: number): void;
    maxActiveStreams(): number;
    maxActiveStreams(arg0: number): void;
    mayHaveCreatedStream(arg0: number): boolean;
    numActiveStreams(): number;
    opposite(): Http2Connection$Endpoint<Http2FlowController>;
    reservePushStream(arg0: number, arg1: Http2Stream): DefaultHttp2Connection$DefaultStream;
    // private updateMaxStreams(): void;
}