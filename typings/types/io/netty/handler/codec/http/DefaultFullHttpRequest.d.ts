import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultHttpRequest } from '../../../../../io/netty/handler/codec/http/DefaultHttpRequest.d.ts'
import type { FullHttpRequest } from '../../../../../io/netty/handler/codec/http/FullHttpRequest.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { HttpMethod } from '../../../../../io/netty/handler/codec/http/HttpMethod.d.ts'
import type { HttpVersion } from '../../../../../io/netty/handler/codec/http/HttpVersion.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class DefaultFullHttpRequest extends DefaultHttpRequest implements FullHttpRequest {
    static EMPTY_LAST_CONTENT: LastHttpContent;
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string)
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string, arg3: ByteBuf)
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string, arg3: ByteBuf, arg4: Map$Entry<string, string>[], arg5: Map$Entry<string, string>[])
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string, arg3: ByteBuf, arg4: Map$Entry<string, string>[], arg5: Map$Entry<string, string>[], arg6: boolean)
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string, arg3: ByteBuf, arg4: HttpHeadersFactory, arg5: HttpHeadersFactory)
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string, arg3: ByteBuf, arg4: boolean)
    constructor(arg0: HttpVersion, arg1: HttpMethod, arg2: string, arg3: boolean)
    // private content: ByteBuf;
    // private hash: number;
    // private trailingHeader: Map$Entry<string, string>[];
    content(): ByteBuf;
    copy(): FullHttpRequest;
    duplicate(): FullHttpRequest;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
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
    toString(): string;
    touch(): FullHttpRequest;
    touch(arg0: Object): FullHttpRequest;
    trailingHeaders(): Map$Entry<string, string>[];
}