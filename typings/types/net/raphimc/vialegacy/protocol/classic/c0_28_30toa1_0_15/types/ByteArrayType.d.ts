import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class ByteArrayType extends Type<number[]> {
    constructor()
    read(arg0: ByteBuf): number[];
    write(arg0: ByteBuf, arg1: number[]): void;
}