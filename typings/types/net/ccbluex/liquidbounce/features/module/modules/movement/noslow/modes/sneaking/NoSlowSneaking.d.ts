import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerSneakMultiplier } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerSneakMultiplier.d.ts'
export class NoSlowSneaking extends ToggleableValueGroup {
    static INSTANCE: NoSlowSneaking;
    // private minMultiplier: number;
    // private /*not mapped: */ getMinMultiplier(): number;
    // private modes: ModeValueGroup<Mode>;
    readonly multiplierHandler: EventHook<PlayerSneakMultiplier>;
    readonly running: boolean;
}