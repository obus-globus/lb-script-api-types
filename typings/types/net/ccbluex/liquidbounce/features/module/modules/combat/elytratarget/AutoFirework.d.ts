import type { Continuation } from '../../../../../../../../kotlin/coroutines/Continuation.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { AutoFirework$FireworkUseMode } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/elytratarget/AutoFirework$FireworkUseMode.d.ts'
import type { Chronometer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
export class AutoFirework extends ToggleableValueGroup {
    static INSTANCE: AutoFirework;
    // private MILLISECONDS_PER_TICK: number;
    // private autoFireworkHandler: EventHook<GameTickEvent>;
    // private cooldown: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getCooldown(): { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getCooldownReached(): boolean;
    // private extraDistance: number;
    // private /*not mapped: */ getExtraDistance(): number;
    // private fireworkChronometer: Chronometer;
    // private fireworkCooldown: number;
    readonly running: boolean;
    // private slotResetDelay: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getSlotResetDelay(): { start: number; endInclusive: number; step: number };
    // private syncCooldownWithKillAura: boolean;
    // private /*not mapped: */ getSyncCooldownWithKillAura(): boolean;
    // private useMode: AutoFirework$FireworkUseMode;
    // private /*not mapped: */ getUseMode(): AutoFirework$FireworkUseMode;
    /** Kotlin `suspend` function: pass a Continuation ({ context, resumeWith }) as the final argument; returns the result or COROUTINE_SUSPENDED. */
    // private canUseFirework($completion: Continuation<boolean>): any;
}