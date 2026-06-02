import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { SprintEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
import type { InventoryMoveSprintControlFeature$SprintMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/inventorymove/features/InventoryMoveSprintControlFeature$SprintMode.d.ts'
export class InventoryMoveSprintControlFeature extends ToggleableValueGroup {
    static INSTANCE: InventoryMoveSprintControlFeature;
    // private clientMode: InventoryMoveSprintControlFeature$SprintMode;
    // private /*not mapped: */ getClientMode(): InventoryMoveSprintControlFeature$SprintMode;
    readonly running: boolean;
    // private serverMode: InventoryMoveSprintControlFeature$SprintMode;
    // private /*not mapped: */ getServerMode(): InventoryMoveSprintControlFeature$SprintMode;
    // private sprintHandler: EventHook<SprintEvent>;
}