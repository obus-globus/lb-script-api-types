import type { ModuleStorageESP$ChestType } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/ModuleStorageESP$ChestType.d.ts'
import type { AbstractBlockLocationTracker$State2BlockPos } from '../../../../../../../net/ccbluex/liquidbounce/utils/block/AbstractBlockLocationTracker$State2BlockPos.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class ModuleStorageESP$StorageScanner extends AbstractBlockLocationTracker$State2BlockPos<ModuleStorageESP$ChestType> {
    static INSTANCE: ModuleStorageESP$StorageScanner;
    getStateFor(pos: BlockPos, state: BlockState): ModuleStorageESP$ChestType | null;
    onUpdated(): void;
}