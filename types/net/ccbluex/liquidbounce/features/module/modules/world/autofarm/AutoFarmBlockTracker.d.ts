import type { AutoFarmTrackedState } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/autofarm/AutoFarmTrackedState.d.ts'
import type { AbstractBlockLocationTracker$State2BlockPos } from '../../../../../../../../net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker$State2BlockPos.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class AutoFarmBlockTracker extends AbstractBlockLocationTracker$State2BlockPos<AutoFarmTrackedState> {
    static INSTANCE: AutoFarmBlockTracker;
    getStateFor(pos: BlockPos, state: BlockState): AutoFarmTrackedState | null;
}