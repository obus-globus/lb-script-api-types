import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { ClientModule } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { InventoryAction } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
import type { ArmorPiece } from '../../../../../../../../net/ccbluex/liquidbounce/utils/item/armor/ArmorPiece.d.ts'
/**
 * AutoArmor module
 *
 * Automatically puts on the best armor.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt:39}
 */
export class ModuleAutoArmor extends ClientModule {
    static INSTANCE: ModuleAutoArmor;
    readonly inventoryConstraints: PlayerInventoryConstraints;
    // private scheduleHandler: EventHook<ScheduleInventoryActionEvent>;
    // private equipArmorPiece(armorPiece: ArmorPiece): InventoryAction | null;
    // private performMoveOrHotbarClick(armorPiece: ArmorPiece, isInArmorSlot: boolean): InventoryAction;
}