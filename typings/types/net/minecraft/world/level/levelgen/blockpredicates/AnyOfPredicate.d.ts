import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Function } from '../../../../../../java/util/function/Function.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { BlockPredicateType } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicateType.d.ts'
import type { CombiningPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/CombiningPredicate.d.ts'
export class AnyOfPredicate extends CombiningPredicate {
    static CODEC: MapCodec<AnyOfPredicate>;
    static ONLY_IN_AIR_OR_WATER_PREDICATE: BlockPredicate;
    static ONLY_IN_AIR_PREDICATE: BlockPredicate;
    static codec<T extends CombiningPredicate>(paramconstructor: (param0: BlockPredicate[]) => T): MapCodec<T>;
    constructor(predicates: BlockPredicate[])
    test(level: WorldGenLevel, origin: BlockPos): boolean;
    type(): BlockPredicateType<any>;
}