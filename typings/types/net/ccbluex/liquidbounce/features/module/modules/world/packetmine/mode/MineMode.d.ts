import type { Mode } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MineTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class MineMode extends Mode {
    static Companion: Tagged$Companion;
    protected constructor(name: string, canManuallyChange: boolean, canAbort: boolean, stopOnStateChange: boolean)
    readonly canAbort: boolean;
    readonly canManuallyChange: boolean;
    readonly parent: ModeValueGroup<any>;
    readonly stopOnStateChange: boolean;
    finish(mineTarget: MineTarget): void;
    isInvalid(mineTarget: MineTarget, state: BlockState): boolean;
    onCannotLookAtTarget(mineTarget: MineTarget): void;
    shouldPreventTargetChange(mineTarget: MineTarget): boolean;
    shouldTarget(blockPos: BlockPos, state: BlockState): boolean;
    shouldUpdate(mineTarget: MineTarget, slot: HotbarItemSlot | null): boolean;
    start(mineTarget: MineTarget): void;
}