import type { ByteBuf } from '../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Delimiters extends Object {
    static lineDelimiter(): ByteBuf[];
    static nulDelimiter(): ByteBuf[];
    private constructor()
}