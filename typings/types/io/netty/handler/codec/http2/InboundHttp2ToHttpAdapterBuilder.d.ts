import type { AbstractInboundHttp2ToHttpAdapterBuilder } from '../../../../../io/netty/handler/codec/http2/AbstractInboundHttp2ToHttpAdapterBuilder.d.ts'
import type { Http2Connection } from '../../../../../io/netty/handler/codec/http2/Http2Connection.d.ts'
import type { InboundHttp2ToHttpAdapter } from '../../../../../io/netty/handler/codec/http2/InboundHttp2ToHttpAdapter.d.ts'
export class InboundHttp2ToHttpAdapterBuilder extends AbstractInboundHttp2ToHttpAdapterBuilder<InboundHttp2ToHttpAdapter, InboundHttp2ToHttpAdapterBuilder> {
    constructor(arg0: Http2Connection)
    build(): InboundHttp2ToHttpAdapter;
    build(arg0: Http2Connection, arg1: number, arg2: boolean, arg3: boolean): InboundHttp2ToHttpAdapter;
    maxContentLength(): number;
    maxContentLength(arg0: number): InboundHttp2ToHttpAdapterBuilder;
    propagateSettings(arg0: boolean): InboundHttp2ToHttpAdapterBuilder;
    validateHttpHeaders(arg0: boolean): InboundHttp2ToHttpAdapterBuilder;
}