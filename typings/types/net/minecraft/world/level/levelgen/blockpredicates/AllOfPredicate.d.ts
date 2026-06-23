import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { BlockPredicateType } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicateType.d.ts'
import type { CombiningPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/CombiningPredicate.d.ts'
export class AllOfPredicate extends CombiningPredicate {
    static CODEC: Codec<BlockPredicate>;
    static CODEC: MapCodec<AllOfPredicate>;
    static ONLY_IN_AIR_OR_WATER_PREDICATE: BlockPredicate;
    static ONLY_IN_AIR_PREDICATE: BlockPredicate;
    static codec(paramconstructor: (param0: BlockPredicate[]) => CombiningPredicate | null): MapCodec<CombiningPredicate>;
    constructor(predicates: BlockPredicate[])
    test(level: WorldGenLevel, origin: BlockPos): boolean;
    type(): BlockPredicateType<any>;
}