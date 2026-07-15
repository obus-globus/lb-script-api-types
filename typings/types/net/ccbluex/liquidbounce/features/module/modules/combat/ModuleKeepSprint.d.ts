import type { ClosedFloatingPointRange } from '../../../../../../../kotlin/ranges/ClosedFloatingPointRange.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PlayerPostTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerPostTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * When hitting an entity, the player will keep sprinting
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleKeepSprint.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/ModuleKeepSprint.kt:32}
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