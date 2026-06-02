import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class InventoryMoveTimerFeature extends ToggleableValueGroup {
    static INSTANCE: InventoryMoveTimerFeature;
    // private speed: number;
    // private /*not mapped: */ getSpeed(): number;
    // private tickHandler: EventHook<GameTickEvent>;
}