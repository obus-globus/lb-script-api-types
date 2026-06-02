import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlockSlipperinessMultiplierEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockSlipperinessMultiplierEvent.d.ts'
import type { BlockVelocityMultiplierEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlockVelocityMultiplierEvent.d.ts'
export class NoSlowSlime extends ToggleableValueGroup {
    static INSTANCE: NoSlowSlime;
    readonly blockSlipperinessMultiplierHandler: EventHook<BlockSlipperinessMultiplierEvent>;
    readonly blockVelocityHandler: EventHook<BlockVelocityMultiplierEvent>;
    // private multiplier: number;
    // private /*not mapped: */ getMultiplier(): number;
}