import type { ToggleableValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
export class NoSlowSlowness extends ToggleableValueGroup {
    static INSTANCE: NoSlowSlowness;
    readonly multiplier: number;
    readonly tickHandler: EventHook<GameTickEvent>;
    onDisabled(): void;
    // private setSlownessMultiplier(multiplier: number): void;
}