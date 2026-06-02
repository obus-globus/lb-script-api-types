import type { Event } from '../../../../../net/ccbluex/liquidbounce/event/Event.d.ts'
import type { InventoryAction } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction.d.ts'
import type { InventoryAction$Chain } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryAction$Chain.d.ts'
import type { InventoryConstraints } from '../../../../../net/ccbluex/liquidbounce/utils/inventory/InventoryConstraints.d.ts'
import type { Priority } from '../../../../../net/ccbluex/liquidbounce/utils/kotlin/Priority.d.ts'
export class ScheduleInventoryActionEvent extends Event {
    constructor(schedule: InventoryAction$Chain[])
    readonly schedule: InventoryAction$Chain[];
    schedule(constrains: InventoryConstraints, actions: InventoryAction[], priority: Priority): void;
    schedule(constrains: InventoryConstraints, actions: InventoryAction[], priority: Priority): void;
    schedule(constrains: InventoryConstraints, action: InventoryAction, priority: Priority): void;
}