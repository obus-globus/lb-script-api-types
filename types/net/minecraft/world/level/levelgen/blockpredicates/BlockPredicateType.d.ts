import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPredicate } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicate.d.ts'
export interface BlockPredicateType<P extends BlockPredicate> extends Object{
    codec(): MapCodec<P>;
}