import type { Http2Connection$PropertyKey } from '../../../../../io/netty/handler/codec/http2/Http2Connection$PropertyKey.d.ts'
import type { Http2Stream$State } from '../../../../../io/netty/handler/codec/http2/Http2Stream$State.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2Stream extends Object{
    close(): Http2Stream;
    closeLocalSide(): Http2Stream;
    closeRemoteSide(): Http2Stream;
    getProperty<V extends unknown>(arg0: Http2Connection$PropertyKey): V;
    headersReceived(arg0: boolean): Http2Stream;
    headersSent(arg0: boolean): Http2Stream;
    id(): number;
    isHeadersReceived(): boolean;
    isHeadersSent(): boolean;
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
}