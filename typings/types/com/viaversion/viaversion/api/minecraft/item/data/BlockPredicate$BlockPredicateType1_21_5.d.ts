import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { StructuredData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { DataComponentMatchers } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/predicate/DataComponentMatchers.d.ts'
import type { DataComponentPredicate } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/predicate/DataComponentPredicate.d.ts'
import type { BlockPredicate } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BlockPredicate.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class BlockPredicate$BlockPredicateType1_21_5 extends Type<BlockPredicate> {
    constructor(arg0: Type<StructuredData<Object>[]>, arg1: Type<DataComponentPredicate[]>)
    // private matchersType: Type<DataComponentMatchers>;
    read(arg0: ByteBuf): BlockPredicate;
    write(arg0: Ops, arg1: BlockPredicate): void;
    write(arg0: ByteBuf, arg1: BlockPredicate): void;
}