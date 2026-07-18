import type { DefaultHttp2Connection } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection.d.ts'
import type { DefaultHttp2Connection$DefaultStream } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultStream.d.ts'
import type { DefaultHttp2Connection$Event } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$Event.d.ts'
import type { Http2Connection$Listener } from '../../../../../io/netty/handler/codec/http2/Http2Connection$Listener.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Http2StreamVisitor } from '../../../../../io/netty/handler/codec/http2/Http2StreamVisitor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class DefaultHttp2Connection$ActiveStreams extends Object {
    constructor(null_: DefaultHttp2Connection, arg1: Http2Connection$Listener[])
    // private listeners: Http2Connection$Listener[];
    // private pendingEvents: DefaultHttp2Connection$Event[];
    // private pendingIterations: number;
    // private streams: Http2Stream[];
    activate(arg0: DefaultHttp2Connection$DefaultStream): void;
    addToActiveStreams(arg0: DefaultHttp2Connection$DefaultStream): void;
    allowModifications(): boolean;
    deactivate(arg0: DefaultHttp2Connection$DefaultStream, arg1: Iterator<Object>): void;
    decrementPendingIterations(): void;
    forEachActiveStream(arg0: Http2StreamVisitor): Http2Stream;
    incrementPendingIterations(): void;
    removeFromActiveStreams(arg0: DefaultHttp2Connection$DefaultStream, arg1: Iterator<Object>): void;
    size(): number;
}