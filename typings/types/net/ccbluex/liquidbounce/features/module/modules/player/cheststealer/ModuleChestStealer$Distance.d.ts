import type { ClosedFloatingPointRange } from '../../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ModuleChestStealer$Distance$StartItem } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer$Distance$StartItem.d.ts'
import type { ModuleChestStealer$SelectionMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer$SelectionMode.d.ts'
import type { ContainerItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ContainerItemSlot.d.ts'
export class ModuleChestStealer$Distance extends ModuleChestStealer$SelectionMode {
    static Companion: Tagged$Companion;
    static INSTANCE: ModuleChestStealer$Distance;
    // private randomFactor: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getRandomFactor(): ClosedFloatingPointRange<number>;
    // private startItem: ModuleChestStealer$Distance$StartItem;
    // private /*not mapped: */ getStartItem(): ModuleChestStealer$Distance$StartItem;
    process(slots: ContainerItemSlot[]): void;
}