import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export interface PlatformModCompat extends Object{
    canHopperInteractWithApiBlockInventory(arg0: (Object | null)[], arg1: BlockState, arg2: boolean): boolean;
}