import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockVelocityMultiplierEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockVelocityMultiplierEvent.d.ts'
export class NoSlowHoney extends ToggleableValueGroup {
    static INSTANCE: NoSlowHoney;
    readonly blockVelocityHandler: EventHook<BlockVelocityMultiplierEvent>;
    readonly multiplier: number;
}