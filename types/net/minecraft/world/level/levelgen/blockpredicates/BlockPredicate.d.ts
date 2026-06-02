import type { BiPredicate } from '../../../../../../java/util/function/BiPredicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { BlockPredicateType } from '../../../../../../net/minecraft/world/level/levelgen/blockpredicates/BlockPredicateType.d.ts'
export interface BlockPredicate extends BiPredicate<WorldGenLevel, BlockPos>, Object{
    and(arg0: (param0: T, param1: U) => kotlin.Boolean): (param0: T, param1: U) => kotlin.Boolean;
    negate(): (param0: T, param1: U) => kotlin.Boolean;
    or(arg0: (param0: T, param1: U) => kotlin.Boolean): (param0: T, param1: U) => kotlin.Boolean;
    type(): BlockPredicateType<Object>;
}