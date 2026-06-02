import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
export class BitSetType extends Type<BitSet> {
    constructor(arg0: number)
    // private bytesLength: number;
    // private length: number;
    read(arg0: ByteBuf): BitSet;
    write(arg0: ByteBuf, arg1: BitSet): void;
}