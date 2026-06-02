import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockVelocityMultiplierEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockVelocityMultiplierEvent.d.ts'
export class NoSlowSoulsand extends ToggleableValueGroup {
    static INSTANCE: NoSlowSoulsand;
    readonly blockVelocityHandler: EventHook<BlockVelocityMultiplierEvent>;
    readonly multiplier: number;
}