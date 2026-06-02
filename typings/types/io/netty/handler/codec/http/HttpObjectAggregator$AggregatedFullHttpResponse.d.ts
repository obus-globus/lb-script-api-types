import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpObjectAggregator$AggregatedFullHttpMessage } from '../../../../../io/netty/handler/codec/http/HttpObjectAggregator$AggregatedFullHttpMessage.d.ts'
import type { HttpResponse } from '../../../../../io/netty/handler/codec/http/HttpResponse.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class HttpObjectAggregator$AggregatedFullHttpResponse extends HttpObjectAggregator$AggregatedFullHttpMessage implements FullHttpResponse {
    static EMPTY_LAST_CONTENT: LastHttpContent;
    constructor(arg0: HttpResponse, arg1: ByteBuf, arg2: Map$Entry<string, string>[])
    copy(): FullHttpResponse;
    duplicate(): FullHttpResponse;
    getStatus(): HttpResponseStatus;
    replace(arg0: ByteBuf): FullHttpResponse;
    retain(): FullHttpResponse;
    retain(arg0: number): FullHttpResponse;
    retainedDuplicate(): FullHttpResponse;
    setProtocolVersion(arg0: HttpVersion): FullHttpResponse;
    setStatus(arg0: HttpResponseStatus): FullHttpResponse;
    status(): HttpResponseStatus;
    toString(): string;
    touch(): FullHttpResponse;
    touch(arg0: Object): FullHttpResponse;
}