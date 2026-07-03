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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0a21163cac7d7e3736ae038e79bf85f09f24d875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/autoarmor/ModuleAutoArmor.kt:44}
 */
export class ModuleAutoArmor extends ClientModule {
    static INSTANCE: ModuleAutoArmor;
    readonly inventoryConstraints: PlayerInventoryConstraints;
    // private scheduleHandler: EventHook<ScheduleInventoryActionEvent>;
    // private equipArmorPiece(armorPiece: ArmorPiece): InventoryAction | null;
    // private performMoveOrHotbarClick(armorPiece: ArmorPiece, isInArmorSlot: boolean): InventoryAction;
}