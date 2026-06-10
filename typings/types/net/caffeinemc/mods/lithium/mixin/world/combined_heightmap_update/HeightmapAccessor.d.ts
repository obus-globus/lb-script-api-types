import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface HeightmapAccessor extends Object {
    callSet(arg0: number, arg1: number, arg2: number): void;
    getBlockPredicate(): (param0: BlockState) => boolean;
}