import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface FoliagePlacer$FoliageSetter extends Object{
    isSet(pos: BlockPos): boolean;
    set(pos: BlockPos, state: BlockState): void;
}