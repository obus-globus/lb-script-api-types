import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockInWorld } from '../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
export interface BlockPredicateArgument$Result extends Predicate<BlockInWorld>, Object {
    and(arg0: (param0: BlockInWorld) => boolean): (param0: BlockInWorld) => boolean;
    negate(): (param0: BlockInWorld) => boolean;
    or(arg0: (param0: BlockInWorld) => boolean): (param0: BlockInWorld) => boolean;
    requiresNbt(): boolean;
}