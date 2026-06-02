import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MineTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { MineMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/mode/MineMode.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class CivMineMode extends MineMode {
    static Companion: Tagged$Companion;
    static INSTANCE: CivMineMode;
    // private switch: boolean;
    // private /*not mapped: */ getSwitch(): boolean;
    finish(mineTarget: MineTarget): void;
    isInvalid(mineTarget: MineTarget, state: BlockState): boolean;
    onCannotLookAtTarget(mineTarget: MineTarget): void;
    shouldTarget(blockPos: BlockPos, state: BlockState): boolean;
    shouldUpdate(mineTarget: MineTarget, slot: HotbarItemSlot | null): boolean;
    start(mineTarget: MineTarget): void;
}