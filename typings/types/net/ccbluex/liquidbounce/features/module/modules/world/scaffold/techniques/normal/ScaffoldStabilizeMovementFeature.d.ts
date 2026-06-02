import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
export class ScaffoldStabilizeMovementFeature extends ToggleableValueGroup {
    static INSTANCE: ScaffoldStabilizeMovementFeature;
    // private MAX_CENTER_DEVIATION: number;
    // private MAX_CENTER_DEVIATION_IF_MOVING_TOWARDS: number;
    readonly moveEvent: EventHook<MovementInputEvent>;
}