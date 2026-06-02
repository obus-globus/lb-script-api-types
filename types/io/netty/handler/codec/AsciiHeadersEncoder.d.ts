import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AsciiHeadersEncoder$NewlineType } from '../../../../io/netty/handler/codec/AsciiHeadersEncoder$NewlineType.d.ts'
import type { AsciiHeadersEncoder$SeparatorType } from '../../../../io/netty/handler/codec/AsciiHeadersEncoder$SeparatorType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
import type { Map$Entry } from '../../../../java/util/Map$Entry.d.ts'
export class AsciiHeadersEncoder extends Object {
    constructor(arg0: ByteBuf)
    constructor(arg0: ByteBuf, arg1: AsciiHeadersEncoder$SeparatorType, arg2: AsciiHeadersEncoder$NewlineType)
    // private buf: ByteBuf;
    // private newlineType: AsciiHeadersEncoder$NewlineType;
    // private separatorType: AsciiHeadersEncoder$SeparatorType;
    encode(arg0: Map$Entry<CharSequence, CharSequence>): void;
}