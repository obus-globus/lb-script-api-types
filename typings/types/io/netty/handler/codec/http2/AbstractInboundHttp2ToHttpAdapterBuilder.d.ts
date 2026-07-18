import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { InboundHttp2ToHttpAdapter } from '../../../../../io/netty/handler/codec/http2/InboundHttp2ToHttpAdapter.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class AbstractInboundHttp2ToHttpAdapterBuilder<T extends InboundHttp2ToHttpAdapter, B extends AbstractInboundHttp2ToHttpAdapterBuilder<T, B>> extends Object {
    constructor(arg0: Http2Connection)
    // private connection: Http2Connection;
    // private maxContentLength: number;
    // private propagateSettings: boolean;
    // private validateHttpHeaders: boolean;
    build(): T;
    build(arg0: Http2Connection, arg1: number, arg2: boolean, arg3: boolean): T;
    connection(): Http2Connection;
    isPropagateSettings(): boolean;
    isValidateHttpHeaders(): boolean;
    maxContentLength(): number;
    maxContentLength(arg0: number): B;
    propagateSettings(arg0: boolean): B;
    self(): B;
    validateHttpHeaders(arg0: boolean): B;
}