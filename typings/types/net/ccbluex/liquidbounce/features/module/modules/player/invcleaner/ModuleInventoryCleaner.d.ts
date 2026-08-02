import type { JavaMap } from '../../../../../../../../JavaMap.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { CleanupPlanPlacementTemplate } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/CleanupPlanPlacementTemplate.d.ts'
import type { InventoryCleanupPlan } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/InventoryCleanupPlan.d.ts'
import type { ItemSortChoice } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemSortChoice.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * InventoryCleaner module
 *
 * Automatically throws away useless items and sorts them.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/ee595b88333a1dc2ff3055eb6be0860bbedcbdb3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ModuleInventoryCleaner.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ModuleInventoryCleaner.kt:48}
 */
export class ModuleInventoryCleaner extends ClientModule {
    static INSTANCE: ModuleInventoryCleaner;
    readonly cleanupTemplateFromSettings: CleanupPlanPlacementTemplate;
    // private handleInventorySchedule: EventHook<ScheduleInventoryActionEvent>;
    // private inventoryConstraints: PlayerInventoryConstraints;
    // private isGreedy: boolean;
    // private /*not mapped: */ isGreedy(): boolean;
    // private itemsBlackList: Item[];
    // private /*not mapped: */ getItemsBlackList(): Item[];
    // private maxArrows: number;
    // private /*not mapped: */ getMaxArrows(): number;
    // private maxBlocks: number;
    // private /*not mapped: */ getMaxBlocks(): number;
    // private maxFoods: number;
    // private /*not mapped: */ getMaxFoods(): number;
    // private maxLavaBuckets: number;
    // private /*not mapped: */ getMaxLavaBuckets(): number;
    // private maxMilkBuckets: number;
    // private /*not mapped: */ getMaxMilkBuckets(): number;
    // private maxThrowables: number;
    // private /*not mapped: */ getMaxThrowables(): number;
    // private maxWaterBuckets: number;
    // private /*not mapped: */ getMaxWaterBuckets(): number;
    // private offHandItem: ItemSortChoice;
    // private /*not mapped: */ getOffHandItem(): ItemSortChoice;
    // private slotItem1: ItemSortChoice;
    // private /*not mapped: */ getSlotItem1(): ItemSortChoice;
    // private slotItem2: ItemSortChoice;
    // private /*not mapped: */ getSlotItem2(): ItemSortChoice;
    // private slotItem3: ItemSortChoice;
    // private /*not mapped: */ getSlotItem3(): ItemSortChoice;
    // private slotItem4: ItemSortChoice;
    // private /*not mapped: */ getSlotItem4(): ItemSortChoice;
    // private slotItem5: ItemSortChoice;
    // private /*not mapped: */ getSlotItem5(): ItemSortChoice;
    // private slotItem6: ItemSortChoice;
    // private /*not mapped: */ getSlotItem6(): ItemSortChoice;
    // private slotItem7: ItemSortChoice;
    // private /*not mapped: */ getSlotItem7(): ItemSortChoice;
    // private slotItem8: ItemSortChoice;
    // private /*not mapped: */ getSlotItem8(): ItemSortChoice;
    // private slotItem9: ItemSortChoice;
    // private /*not mapped: */ getSlotItem9(): ItemSortChoice;
    // private buildSlotTargetMap(): JavaMap<HotbarItemSlot, ItemSortChoice>;
    // private processHotbarSwaps(event: ScheduleInventoryActionEvent, cleanupPlan: InventoryCleanupPlan): boolean;
    // private processItemDisposal(event: ScheduleInventoryActionEvent, cleanupPlan: InventoryCleanupPlan, currentInventorySlots: ItemSlot[]): boolean;
    // private processStackMerging(event: ScheduleInventoryActionEvent, cleanupPlan: InventoryCleanupPlan): boolean;
}