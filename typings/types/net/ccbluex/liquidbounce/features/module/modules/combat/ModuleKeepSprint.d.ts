import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { PercentageChance } from '../../../../../../../net/ccbluex/liquidbounce/config/utils/PercentageChance.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerPostTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerPostTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * When hitting an entity, the player will keep sprinting
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleKeepSprint.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleKeepSprint.kt:32}
 */
export class ModuleKeepSprint extends ClientModule {
    static INSTANCE: ModuleKeepSprint;
    // private chance: PercentageChance<number>;
    // private hurtTime: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getHurtTime(): { start: number; endInclusive: number; step: number };
    readonly motion: ClosedFloatingPointRange<number>;
    // private motionWhenHurt: ClosedFloatingPointRange<number>;
    // private /*not mapped: */ getMotionWhenHurt(): ClosedFloatingPointRange<number>;
    // private postTickHandler: EventHook<PlayerPostTickEvent>;
    sprinting: boolean;
    getMotion(): number;
}