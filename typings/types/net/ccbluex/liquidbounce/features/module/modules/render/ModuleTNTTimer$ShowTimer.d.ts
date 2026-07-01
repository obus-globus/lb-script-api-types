import type { ToggleableValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { OverlayRenderEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { TimeUnit } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/render/TimeUnit.d.ts'
export class ModuleTNTTimer$ShowTimer extends ToggleableValueGroup {
    static INSTANCE: ModuleTNTTimer$ShowTimer;
    readonly ownerName: boolean;
    // private render2DHandler: EventHook<OverlayRenderEvent>;
    readonly renderY: number;
    readonly scale: number;
    readonly timeUnit: TimeUnit;
}