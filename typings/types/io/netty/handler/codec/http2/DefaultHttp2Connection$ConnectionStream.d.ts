import type { DefaultHttp2Connection } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection.d.ts'
import type { DefaultHttp2Connection$DefaultEndpoint } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultEndpoint.d.ts'
import type { DefaultHttp2Connection$DefaultStream } from '../../../../../io/netty/handler/codec/http2/DefaultHttp2Connection$DefaultStream.d.ts'
import type { Http2FlowController } from '../../../../../io/netty/handler/codec/http2/Http2FlowController.d.ts'
import type { Http2Stream } from '../../../../../io/netty/handler/codec/http2/Http2Stream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class DefaultHttp2Connection$ConnectionStream extends DefaultHttp2Connection$DefaultStream {
    constructor(null_: DefaultHttp2Connection)
    close(): Http2Stream;
    close(arg0: Iterator<Object>): Http2Stream;
    closeLocalSide(): Http2Stream;
    closeRemoteSide(): Http2Stream;
    createdBy(): DefaultHttp2Connection$DefaultEndpoint<Http2FlowController>;
    headersSent(arg0: boolean): Http2Stream;
    isHeadersSent(): boolean;
    isPushPromiseSent(): boolean;
    isResetSent(): boolean;
    open(arg0: boolean): Http2Stream;
    pushPromiseSent(): Http2Stream;
    resetSent(): Http2Stream;
}