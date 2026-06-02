import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerPostTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerPostTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * When hitting an entity, the player will keep sprinting
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleKeepSprint.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleKeepSprint.kt:29}
 */
export class ModuleKeepSprint extends ClientModule {
    static INSTANCE: ModuleKeepSprint;
    // private chance: number;
    // private /*not mapped: */ getChance(): number;
    // private hurtTime: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getHurtTime(): { start: number; endInclusive: number; step: number };
    readonly motion: ClosedFloatingPointRange<number>;
    // private motionWhenHurt: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getMotionWhenHurt(): ClosedFloatingPointRange<number>;
    // private postTickHandler: EventHook<PlayerPostTickEvent>;
    sprinting: boolean;
    getMotion(): number;
}