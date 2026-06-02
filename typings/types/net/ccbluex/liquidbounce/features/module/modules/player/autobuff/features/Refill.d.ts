import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { ScheduleInventoryActionEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ScheduleInventoryActionEvent.d.ts'
import type { PlayerInventoryConstraints } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/PlayerInventoryConstraints.d.ts'
export class Refill extends ToggleableValueGroup {
    static INSTANCE: Refill;
    // private inventoryConstraints: PlayerInventoryConstraints;
    execute(event: ScheduleInventoryActionEvent): void;
    // private findEmptyHotbarSlot(): boolean;
}