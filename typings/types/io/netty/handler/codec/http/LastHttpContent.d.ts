import type { ByteBuf } from '../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpContent } from '../../../../../io/netty/handler/codec/http/HttpContent.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export interface LastHttpContent extends HttpContent, Object{
    copy(): LastHttpContent;
    duplicate(): LastHttpContent;
    replace(arg0: ByteBuf): LastHttpContent;
    retain(): LastHttpContent;
    retain(arg0: number): LastHttpContent;
    retainedDuplicate(): LastHttpContent;
    touch(): LastHttpContent;
    touch(arg0: Object): LastHttpContent;
    trailingHeaders(): Map$Entry<string, string>[];
}