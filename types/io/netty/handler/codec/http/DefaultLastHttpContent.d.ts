import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { DefaultHttpContent } from '../../../../../io/netty/handler/codec/http/DefaultHttpContent.d.ts'
import type { HttpHeadersFactory } from '../../../../../io/netty/handler/codec/http/HttpHeadersFactory.d.ts'
import type { LastHttpContent } from '../../../../../io/netty/handler/codec/http/LastHttpContent.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class DefaultLastHttpContent extends DefaultHttpContent implements LastHttpContent {
    static EMPTY_LAST_CONTENT: LastHttpContent;
    constructor()
    constructor(arg0: ByteBuf)
    constructor(arg0: ByteBuf, arg1: Map$Entry<string, string>[])
    constructor(arg0: ByteBuf, arg1: HttpHeadersFactory)
    constructor(arg0: ByteBuf, arg1: boolean)
    // private trailingHeaders: Map$Entry<string, string>[];
    // private appendHeaders(arg0: StringBuilder): void;
    copy(): LastHttpContent;
    duplicate(): LastHttpContent;
    replace(arg0: ByteBuf): LastHttpContent;
    retain(): LastHttpContent;
    retain(arg0: number): LastHttpContent;
    retainedDuplicate(): LastHttpContent;
    toString(): string;
    touch(): LastHttpContent;
    touch(arg0: Object): LastHttpContent;
    trailingHeaders(): Map$Entry<string, string>[];
}