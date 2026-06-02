import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultHttpResponse } from '../../../../../io/netty/handler/codec/http/DefaultHttpResponse.d.ts'
import type { FullHttpResponse } from '../../../../../io/netty/handler/codec/http/FullHttpResponse.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { HttpResponseStatus } from '../../../../../io/netty/handler/codec/http/HttpResponseStatus.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class DefaultFullHttpResponse extends DefaultHttpResponse implements FullHttpResponse {
    static EMPTY_LAST_CONTENT: LastHttpContent;
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus)
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: ByteBuf)
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: ByteBuf, arg3: Map$Entry<string, string>[], arg4: Map$Entry<string, string>[])
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: ByteBuf, arg3: HttpHeadersFactory, arg4: HttpHeadersFactory)
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: ByteBuf, arg3: boolean)
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: ByteBuf, arg3: boolean, arg4: boolean)
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: boolean)
    constructor(arg0: HttpVersion, arg1: HttpResponseStatus, arg2: boolean, arg3: boolean)
    // private content: ByteBuf;
    // private hash: number;
    // private trailingHeaders: Map$Entry<string, string>[];
    content(): ByteBuf;
    copy(): FullHttpResponse;
    duplicate(): FullHttpResponse;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    refCnt(): number;
    release(): boolean;
    release(arg0: number): boolean;
    replace(arg0: ByteBuf): FullHttpResponse;
    retain(): FullHttpResponse;
    retain(arg0: number): FullHttpResponse;
    retainedDuplicate(): FullHttpResponse;
    setProtocolVersion(arg0: HttpVersion): FullHttpResponse;
    setStatus(arg0: HttpResponseStatus): FullHttpResponse;
    toString(): string;
    touch(): FullHttpResponse;
    touch(arg0: Object): FullHttpResponse;
    trailingHeaders(): Map$Entry<string, string>[];
}