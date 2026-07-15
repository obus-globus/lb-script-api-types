import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { TickPacketProcessEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/TickPacketProcessEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
/**
 * Lag mode. It delays some ticks of knockback.
 * It is equals to "delay velocity".
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityLag.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityLag.kt:40}
 */
export class VelocityLag extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityLag;
    // private considerExplosion: boolean;
    // private /*not mapped: */ getConsiderExplosion(): boolean;
    // private jumpReset: boolean;
    // private /*not mapped: */ getJumpReset(): boolean;
    // private lagTicks: number;
    // private lagTime: { start: number; endInclusive: number; step: number };
    // private /*not mapped: */ getLagTime(): { start: number; endInclusive: number; step: number };
    // private movementInputHandler: EventHook<MovementInputEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    // private queuePacketHandler: EventHook<BlinkPacketEvent>;
    // private shouldJump: boolean;
    // private shouldLag: boolean;
    // private tickHandler: EventHook<GameTickEvent>;
    // private tickPacketProcessHandler: EventHook<TickPacketProcessEvent>;
    disable(): void;
}