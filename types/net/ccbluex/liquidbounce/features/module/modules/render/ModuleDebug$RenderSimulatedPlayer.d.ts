import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { WorldRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/WorldRenderEvent.d.ts'
export class ModuleDebug$RenderSimulatedPlayer extends ToggleableValueGroup {
    static INSTANCE: ModuleDebug$RenderSimulatedPlayer;
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private renderHandler: EventHook<WorldRenderEvent>;
    // private ticksToPredict: number;
    // private /*not mapped: */ getTicksToPredict(): number;
}