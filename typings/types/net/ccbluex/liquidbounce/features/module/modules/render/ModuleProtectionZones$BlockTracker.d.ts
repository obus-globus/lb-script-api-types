import type { AbstractBlockLocationTracker$BlockPos2State } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker$BlockPos2State.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModuleProtectionZones$BlockTracker extends AbstractBlockLocationTracker$BlockPos2State<Block> {
    static INSTANCE: ModuleProtectionZones$BlockTracker;
    getStateFor(pos: BlockPos, state: BlockState): Block | null;
}