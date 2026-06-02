import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerStrideEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerStrideEvent.d.ts'
export class ModuleFly$Visuals extends ToggleableValueGroup {
    static INSTANCE: ModuleFly$Visuals;
    // private stride: boolean;
    // private /*not mapped: */ getStride(): boolean;
    readonly strideHandler: EventHook<PlayerStrideEvent>;
}