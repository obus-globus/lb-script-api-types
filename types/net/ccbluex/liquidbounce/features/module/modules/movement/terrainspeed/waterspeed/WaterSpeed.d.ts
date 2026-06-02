import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PlayerTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerTickEvent.d.ts'
export class WaterSpeed extends ToggleableValueGroup {
    static INSTANCE: WaterSpeed;
    readonly autoSwim: boolean;
    // private inputHandler: EventHook<MovementInputEvent>;
    // private tickHandler: EventHook<PlayerTickEvent>;
}