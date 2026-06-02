import type { StructuredData } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/StructuredData.d.ts'
import type { DataComponentPredicate } from '../../../../../../../com/viaversion/viaversion/api/minecraft/data/predicate/DataComponentPredicate.d.ts'
import type { AdventureModePredicate } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/AdventureModePredicate.d.ts'
import type { BlockPredicate } from '../../../../../../../com/viaversion/viaversion/api/minecraft/item/data/BlockPredicate.d.ts'
import type { Type } from '../../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class AdventureModePredicate$AdventureModePredicateType1_21_5 extends Type<AdventureModePredicate> {
    constructor(arg0: Type<StructuredData<Object>[]>, arg1: Type<DataComponentPredicate[]>)
    // private blockPredicateType: Type<BlockPredicate[]>;
    read(arg0: ByteBuf): AdventureModePredicate;
    write(arg0: ByteBuf, arg1: AdventureModePredicate): void;
}