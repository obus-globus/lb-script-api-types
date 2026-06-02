import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { FullHttpRequest } from '../../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { HttpContent } from '../../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { HttpMethod } from '../../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpRequest } from '../../../../../../io/netty/handler/codec/http/HttpRequest.d.ts'
import type { HttpVersion } from '../../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { LastHttpContent } from '../../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { HttpPostRequestEncoder$WrappedHttpRequest } from '../../../../../../io/netty/handler/codec/http/multipart/HttpPostRequestEncoder$WrappedHttpRequest.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class HttpPostRequestEncoder$WrappedFullHttpRequest extends HttpPostRequestEncoder$WrappedHttpRequest implements FullHttpRequest {
    static EMPTY_LAST_CONTENT: LastHttpContent;
    private constructor(arg0: HttpRequest, arg1: HttpContent)
    // private content: HttpContent;
    content(): ByteBuf;
    copy(): FullHttpRequest;
    duplicate(): FullHttpRequest;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): FullHttpRequest;
    retain(): FullHttpRequest;
    retain(arg0: number): FullHttpRequest;
    retainedDuplicate(): FullHttpRequest;
    setMethod(arg0: HttpMethod): FullHttpRequest;
    setProtocolVersion(arg0: HttpVersion): FullHttpRequest;
    setUri(arg0: string): FullHttpRequest;
    touch(): FullHttpRequest;
    touch(arg0: Object): FullHttpRequest;
    trailingHeaders(): Map$Entry<string, string>[];
}