import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { InventoryMoveSneakControlFeature$SneakMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSneakControlFeature$SneakMode.d.ts'
export class InventoryMoveSneakControlFeature extends ToggleableValueGroup {
    static INSTANCE: InventoryMoveSneakControlFeature;
    // private clientMode: InventoryMoveSneakControlFeature$SneakMode;
    // private /*not mapped: */ getClientMode(): InventoryMoveSneakControlFeature$SneakMode;
    readonly running: boolean;
    // private sneakInputHandler: EventHook<MovementInputEvent>;
}