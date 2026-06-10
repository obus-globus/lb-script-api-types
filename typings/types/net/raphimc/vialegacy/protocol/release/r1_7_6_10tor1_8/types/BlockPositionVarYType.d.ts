import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { IntFunction } from '../../../../../../../java/util/function/IntFunction.d.ts'
import type { Number } from '../../../../../../../java/lang/Number.d.ts'
export class BlockPositionVarYType<T extends Number> extends Type<BlockPosition> {
    constructor(arg0: Type<T>, arg1: (param0: number) => T)
    // private yConverter: (param0: number) => T;
    // private yType: Type<T>;
    read(arg0: ByteBuf): BlockPosition;
    write(arg0: Ops, arg1: BlockPosition): void;
    write(arg0: ByteBuf, arg1: BlockPosition): void;
}