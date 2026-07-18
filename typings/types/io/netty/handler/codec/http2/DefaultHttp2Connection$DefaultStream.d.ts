import type { DefaultHttp2Connection } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection.d.ts'
import type { DefaultHttp2Connection$DefaultEndpoint } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultEndpoint.d.ts'
import type { DefaultHttp2Connection$DefaultStream$PropertyMap } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultStream$PropertyMap.d.ts'
import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2FlowController } from '../../../../../io/netty/handler/codec/http2/Http2FlowController.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Http2Stream$State } from '../../../../../io/netty/handler/codec/http2/Http2Stream$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class DefaultHttp2Connection$DefaultStream extends Object implements Http2Stream {
    constructor(null_: DefaultHttp2Connection, arg1: number, arg2: number, arg3: Http2Stream$State)
    // private id: number;
    // private identity: number;
    // private metaState: number;
    // private properties: DefaultHttp2Connection$DefaultStream$PropertyMap;
    // private state: Http2Stream$State;
    activate(): void;
    close(): Http2Stream;
    close(arg0: Iterator<Object>): Http2Stream;
    closeLocalSide(): Http2Stream;
    closeRemoteSide(): Http2Stream;
    createdBy(): DefaultHttp2Connection$DefaultEndpoint<Http2FlowController>;
    equals(arg0: Object | null): boolean;
    getProperty<V extends unknown>(arg0: Http2Connection$PropertyKey): V;
    hashCode(): number;
    headersReceived(arg0: boolean): Http2Stream;
    headersSent(arg0: boolean): Http2Stream;
    id(): number;
    isHeadersReceived(): boolean;
    isHeadersSent(): boolean;
    isLocal(): boolean;
    isPushPromiseSent(): boolean;
    isResetSent(): boolean;
    isTrailersReceived(): boolean;
    isTrailersSent(): boolean;
    open(arg0: boolean): Http2Stream;
    pushPromiseSent(): Http2Stream;
    removeProperty<V extends unknown>(arg0: Http2Connection$PropertyKey): V;
    resetSent(): Http2Stream;
    setProperty<V extends unknown>(arg0: Http2Connection$PropertyKey, arg1: V): V;
    state(): Http2Stream$State;
    toString(): string;
}