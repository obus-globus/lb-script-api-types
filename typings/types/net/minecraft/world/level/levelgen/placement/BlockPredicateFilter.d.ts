import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementFilter } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementFilter.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
export class BlockPredicateFilter extends PlacementFilter {
    static CODEC: MapCodec<BlockPredicateFilter>;
    static forPredicate(parampredicate: BlockPredicate): BlockPredicateFilter;
    private constructor(predicate: BlockPredicate)
    // private predicate: BlockPredicate;
    shouldPlace(context: PlacementContext, random: RandomSource, origin: BlockPos): boolean;
    type(): PlacementModifierType<any>;
}