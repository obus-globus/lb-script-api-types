import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ScreenEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleReplenish$Features } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleReplenish$Features.d.ts'
import type { ModuleReplenish$InsideOf } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/ModuleReplenish$InsideOf.d.ts'
import type { ItemAndComponents } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/invcleaner/ItemAndComponents.d.ts'
import type { Chronometer } from '../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { HotbarItemSlot } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
/**
 * Module Replenish
 *
 * Automatically refills your hotbar with items from your inventory when the count drops to a certain threshold.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleReplenish.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleReplenish.kt:50}
 */
export class ModuleReplenish extends ClientModule {
    static INSTANCE: ModuleReplenish;
    // private chronometer: Chronometer;
    // private constraints: PlayerInventoryConstraints;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    // private features: ModuleReplenish$Features[];
    // private /*not mapped: */ getFeatures(): ModuleReplenish$Features[];
    // private insideOf: ModuleReplenish$InsideOf[];
    // private /*not mapped: */ getInsideOf(): ModuleReplenish$InsideOf[];
    // private inventoryScheduleHandler: EventHook<ScheduleInventoryActionEvent>;
    // private itemThreshold: number;
    // private /*not mapped: */ getItemThreshold(): number;
    // private replenishEmpty: boolean;
    // private /*not mapped: */ getReplenishEmpty(): boolean;
    readonly running: boolean;
    // private screenHandler: EventHook<ScreenEvent>;
    // private trackedHotbarItems: { [key in HotbarItemSlot]: ItemAndComponents };
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    // private clear(): void;
    onEnabled(): void;
}