import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { AttackEntityEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/AttackEntityEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
/**
 * Hylex Velocity
 *
 * Works because of a silly exemption from Hylex
 * @author @liquidsquid1
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/0f34808bf6954ff6126dde353ff9e896eb4a2ead/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityHylex.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityHylex.kt:32}
 */
export class VelocityHylex extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityHylex;
    // private attackHandler: EventHook<AttackEntityEvent>;
    // private repeatable: EventHook<GameTickEvent>;
}