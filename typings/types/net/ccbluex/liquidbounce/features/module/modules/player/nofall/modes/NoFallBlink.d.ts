import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
/**
 * SpoofGround mode for the NoFall module.
 * This mode spoofs the 'onGround' flag in PlayerMoveC2SPacket to prevent fall damage.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallBlink.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallBlink.kt:40}
 */
export class NoFallBlink extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallBlink;
    // private MAXIMUM_TICKS: number;
    // private PEEK_TICKS: number;
    // private blinkFall: boolean;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    // private inputHandler: EventHook<MovementInputEvent>;
    // private maximumFallDistance: number;
    // private /*not mapped: */ getMaximumFallDistance(): number;
    // private packetHandler: EventHook<PacketEvent>;
    // private triggerFallDistance: number;
    // private /*not mapped: */ getTriggerFallDistance(): number;
    waitUntilGround: boolean;
    disable(): void;
}