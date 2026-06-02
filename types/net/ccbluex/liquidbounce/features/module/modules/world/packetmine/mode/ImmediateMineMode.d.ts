import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MineTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { MineMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/mode/MineMode.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class ImmediateMineMode extends MineMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ImmediateMineMode;
    // private waitForConfirm: boolean;
    // private /*not mapped: */ getWaitForConfirm(): boolean;
    finish(mineTarget: MineTarget): void;
    shouldUpdate(mineTarget: MineTarget, slot: HotbarItemSlot | null): boolean;
    start(mineTarget: MineTarget): void;
}