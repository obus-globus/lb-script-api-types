import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BigInteger } from '../../../../../../java/math/BigInteger.d.ts'
export class UnsignedVarBigIntegerType extends Type<BigInteger> {
    constructor()
    read(arg0: ByteBuf): BigInteger;
    write(arg0: ByteBuf, arg1: BigInteger): void;
}