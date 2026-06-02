import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class AsciiStringType extends Type<string> {
    constructor()
    read(arg0: ByteBuf): string;
    write(arg0: ByteBuf, arg1: string): void;
}