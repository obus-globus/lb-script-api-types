import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleChestStealer$Index$Order } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer$Index$Order.d.ts'
import type { ModuleChestStealer$SelectionMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer$SelectionMode.d.ts'
import type { ContainerItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ContainerItemSlot.d.ts'
export class ModuleChestStealer$Index extends ModuleChestStealer$SelectionMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleChestStealer$Index;
    // private order: ModuleChestStealer$Index$Order;
    // private /*not mapped: */ getOrder(): ModuleChestStealer$Index$Order;
    process(slots: ContainerItemSlot[]): void;
}