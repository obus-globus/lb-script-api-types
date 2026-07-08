import type { UUID } from '../../../../../../../java/util/UUID.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EntityEquipmentChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/EntityEquipmentChangeEvent.d.ts'
import type { ItemLoreQueryEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/ItemLoreQueryEvent.d.ts'
import type { WorldChangeEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldChangeEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { TrackedInventory } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/TrackedInventory.d.ts'
import type { Player } from '../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
/**
 * Module InventoryTracker
 *
 * Tracks the inventories of other players.
 *
 * Command: {@link CommandInvsee}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/9e7b00e677594d328d20ab213c6936c4d553b720/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleInventoryTracker.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleInventoryTracker.kt:53}
 */
export class ModuleInventoryTracker extends ClientModule {
    static INSTANCE: ModuleInventoryTracker;
    // private inventoryMap: Map<UUID, TrackedInventory>;
    // private itemLoreQueryHandler: EventHook<ItemLoreQueryEvent>;
    readonly playerEquipmentChangeHandler: EventHook<EntityEquipmentChangeEvent>;
    readonly playerMap: Map<UUID, Player>;
    // private savePlayers: boolean;
    // private /*not mapped: */ getSavePlayers(): boolean;
    // private worldChangeHandler: EventHook<WorldChangeEvent>;
    onDisabled(): void;
    // private reset(): void;
    // private toMinutesSeconds(ms: number): string;
}