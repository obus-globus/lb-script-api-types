import type { InputConstants$Key } from '../../../../../../../../com/mojang/blaze3d/platform/InputConstants$Key.d.ts'
import type { Pair } from '../../../../../../../../kotlin/Pair.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { KeyEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/KeyEvent.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleOffhand$Mode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand$Mode.d.ts'
import type { ModuleOffhand$SwitchMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand$SwitchMode.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { InventoryAction$Click } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Click.d.ts'
import type { ItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ItemSlot.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
import type { Item } from '../../../../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * Offhand module
 *
 * Manages your offhand.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/offhand/ModuleOffhand.kt:55}
 */
export class ModuleOffhand extends ClientModule {
    static INSTANCE: ModuleOffhand;
    // private INVENTORY_HOTBAR_PRIORITY: ItemSlot[];
    // private INVENTORY_MAIN_PRIORITY: ItemSlot[];
    // private activeMode: ModuleOffhand$Mode;
    // private autoTotemHandler: EventHook<ScheduleInventoryActionEvent>;
    // private chronometer: Chronometer;
    // private cycleSlots: InputConstants$Key;
    // private /*not mapped: */ getCycleSlots(): InputConstants$Key;
    // private inventoryConstraints: PlayerInventoryConstraints;
    readonly keyHandler: EventHook<KeyEvent>;
    // private last: Pair<Item, ItemSlot> | null;
    // private lastMode: ModuleOffhand$Mode | null;
    // private lastTagMode: ModuleOffhand$Mode;
    // private staticMode: ModuleOffhand$Mode;
    // private switchDelay: number;
    // private /*not mapped: */ getSwitchDelay(): number;
    // private switchMode: ModuleOffhand$SwitchMode;
    // private /*not mapped: */ getSwitchMode(): ModuleOffhand$SwitchMode;
    readonly tag: string;
    isOperating(): boolean;
    onEnabled(): void;
    // private performSwitch(from: ItemSlot, smart: boolean): InventoryAction$Click[];
}