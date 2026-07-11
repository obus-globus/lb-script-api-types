import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerMoveEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMoveEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
/**
 * Strafe velocity
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityStrafe.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityStrafe.kt:39}
 */
export class VelocityStrafe extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityStrafe;
    // private applyStrafe: boolean;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    // private moveHandler: EventHook<PlayerMoveEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    // private shouldStrafe: boolean;
    // private strength: number;
    // private /*not mapped: */ getStrength(): number;
    // private tickHandler: EventHook<GameTickEvent>;
    // private untilGround: boolean;
    // private /*not mapped: */ getUntilGround(): boolean;
}