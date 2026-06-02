import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MouseScrollInHotbarEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/MouseScrollInHotbarEvent.d.ts'
export class ModuleZoom$Scroll extends ToggleableValueGroup {
    static INSTANCE: ModuleZoom$Scroll;
    readonly onScroll: EventHook<MouseScrollInHotbarEvent>;
    readonly speed: number;
}