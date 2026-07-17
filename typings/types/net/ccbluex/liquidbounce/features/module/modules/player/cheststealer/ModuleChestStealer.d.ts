import type { ModeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleChestStealer$ItemMoveMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer$ItemMoveMode.d.ts'
import type { ModuleChestStealer$OnFull } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer$OnFull.d.ts'
import type { ModuleChestStealer$SelectionMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer$SelectionMode.d.ts'
import type { InventoryCleanupPlan } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/InventoryCleanupPlan.d.ts'
import type { CheckScreenHandlerTypeValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/CheckScreenHandlerTypeValueGroup.d.ts'
import type { CheckScreenTitleValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/CheckScreenTitleValueGroup.d.ts'
import type { InventoryAction } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryConstraints } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { AbstractContainerScreen } from '../../../../../../../../net/minecraft/client/gui/screens/inventory/AbstractContainerScreen.d.ts'
/**
 * ChestStealer module
 *
 * Automatically steals all items from a chest.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer.kt#L62 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/ModuleChestStealer.kt:62}
 */
export class ModuleChestStealer extends ClientModule {
    static INSTANCE: ModuleChestStealer;
    // private autoClose: boolean;
    // private /*not mapped: */ getAutoClose(): boolean;
    // private checkScreenHandlerType: CheckScreenHandlerTypeValueGroup;
    // private checkScreenTitle: CheckScreenTitleValueGroup;
    // private inventoryConstrains: InventoryConstraints;
    // private itemMoveMode: ModuleChestStealer$ItemMoveMode;
    // private /*not mapped: */ getItemMoveMode(): ModuleChestStealer$ItemMoveMode;
    // private onFull: ModuleChestStealer$OnFull;
    // private /*not mapped: */ getOnFull(): ModuleChestStealer$OnFull;
    // private quickSwaps: boolean;
    // private /*not mapped: */ getQuickSwaps(): boolean;
    // private scheduleInventoryAction: EventHook<ScheduleInventoryActionEvent>;
    // private selectionMode: ModeValueGroup<ModuleChestStealer$SelectionMode>;
    // private createCleanupPlan(screen: AbstractContainerScreen<any>): InventoryCleanupPlan;
    // private getChestScreen(): AbstractContainerScreen<any> | null;
    // private getStillRequiredSpace(cleanupPlan: InventoryCleanupPlan, slotsToCollect: number): number;
    // private performQuickSwaps(event: ScheduleInventoryActionEvent, cleanupPlan: InventoryCleanupPlan, screen: AbstractContainerScreen<any>): boolean;
    // private throwItem(cleanupPlan: InventoryCleanupPlan, screen: AbstractContainerScreen<any>, targetBlacklist: ItemSlot[]): InventoryAction[] | null;
}