import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Vec3i } from '../../../../../../net/minecraft/core/Vec3i.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { BlockPredicateType } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicateType.d.ts'
import type { StateTestingPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/StateTestingPredicate.d.ts'
export class SolidPredicate extends StateTestingPredicate {
    static CODEC: Codec<BlockPredicate>;
    static CODEC: MapCodec<SolidPredicate>;
    static ONLY_IN_AIR_OR_WATER_PREDICATE: BlockPredicate;
    static ONLY_IN_AIR_PREDICATE: BlockPredicate;
    constructor(offset: Vec3i)
    test(state: BlockState): boolean;
    type(): BlockPredicateType<Object>;
}