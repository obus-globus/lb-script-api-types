import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleChestStealer$SelectionMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer$SelectionMode.d.ts'
import type { ContainerItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ContainerItemSlot.d.ts'
export class ModuleChestStealer$Random extends ModuleChestStealer$SelectionMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleChestStealer$Random;
    process(slots: ContainerItemSlot[]): void;
}