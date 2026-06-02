import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
export class ScaffoldSpeedLimiterFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldSpeedLimiterFeature;
    // private moveEvent: EventHook<MovementInputEvent>;
    // private speedLimit: number;
    // private /*not mapped: */ getSpeedLimit(): number;
}