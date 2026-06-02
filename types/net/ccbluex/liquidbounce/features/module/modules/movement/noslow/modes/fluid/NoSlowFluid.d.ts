import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { FluidPushEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/FluidPushEvent.d.ts'
import type { PlayerFluidCollisionCheckEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerFluidCollisionCheckEvent.d.ts'
export class NoSlowFluid extends ToggleableValueGroup {
    static INSTANCE: NoSlowFluid;
    // private collision: boolean;
    // private /*not mapped: */ getCollision(): boolean;
    // private fluidCollisionHandler: EventHook<PlayerFluidCollisionCheckEvent>;
    // private fluidPushHandler: EventHook<FluidPushEvent>;
}