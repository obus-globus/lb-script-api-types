import type { CurveValue } from '../../../../../../../net/ccbluex/liquidbounce/config/types/CurveValue.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
export class ModuleDebug$Graph extends ToggleableValueGroup {
    static INSTANCE: ModuleDebug$Graph;
    // private curve: CurveValue;
    // private screenRenderHandler: EventHook<OverlayRenderEvent>;
}