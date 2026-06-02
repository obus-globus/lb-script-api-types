import type { ModuleBlockESP$TrackedState } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleBlockESP$TrackedState.d.ts'
import type { AbstractBlockLocationTracker$BlockPos2State } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker$BlockPos2State.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModuleBlockESP$BlockTracker extends AbstractBlockLocationTracker$BlockPos2State<ModuleBlockESP$TrackedState> {
    static INSTANCE: ModuleBlockESP$BlockTracker;
    getStateFor(pos: BlockPos, state: BlockState): ModuleBlockESP$TrackedState | null;
    onUpdated(): void;
}