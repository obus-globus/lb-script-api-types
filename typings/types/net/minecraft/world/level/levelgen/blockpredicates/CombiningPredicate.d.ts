import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
export abstract class CombiningPredicate extends Object implements BlockPredicate {
    static CODEC: Codec<BlockPredicate>;
    static ONLY_IN_AIR_OR_WATER_PREDICATE: BlockPredicate;
    static ONLY_IN_AIR_PREDICATE: BlockPredicate;
    static codec<T extends CombiningPredicate>(paramconstructor: (param0: BlockPredicate[]) => T): MapCodec<T>;
    constructor(predicates: BlockPredicate[])
    // private predicates: BlockPredicate[];
}