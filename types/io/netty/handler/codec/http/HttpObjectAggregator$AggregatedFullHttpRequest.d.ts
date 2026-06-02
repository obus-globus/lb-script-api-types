import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { FullHttpRequest } from '../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpObjectAggregator$AggregatedFullHttpMessage } from '../../../../../io/netty/handler/codec/http/HttpObjectAggregator$AggregatedFullHttpMessage.d.ts'
import type { HttpRequest } from '../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class HttpObjectAggregator$AggregatedFullHttpRequest extends HttpObjectAggregator$AggregatedFullHttpMessage implements FullHttpRequest {
    static EMPTY_LAST_CONTENT: LastHttpContent;
    constructor(arg0: HttpRequest, arg1: ByteBuf, arg2: Map$Entry<string, string>[])
    copy(): FullHttpRequest;
    duplicate(): FullHttpRequest;
    getMethod(): HttpMethod;
    getUri(): string;
    method(): HttpMethod;
    replace(arg0: ByteBuf): FullHttpRequest;
    retain(): FullHttpRequest;
    retain(arg0: number): FullHttpRequest;
    retainedDuplicate(): FullHttpRequest;
    setMethod(arg0: HttpMethod): FullHttpRequest;
    setProtocolVersion(arg0: HttpVersion): FullHttpRequest;
    setUri(arg0: string): FullHttpRequest;
    toString(): string;
    touch(): FullHttpRequest;
    touch(arg0: Object): FullHttpRequest;
    uri(): string;
}