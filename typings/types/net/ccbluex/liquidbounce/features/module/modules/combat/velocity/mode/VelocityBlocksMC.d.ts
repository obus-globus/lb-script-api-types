import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { VelocityMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityMode.d.ts'
/**
 * BlocksMC velocity
 * @author liquidsquid1
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e56f181853dc858654c9fc909afec417d274473d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityBlocksMC.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/velocity/mode/VelocityBlocksMC.kt:31}
 */
export class VelocityBlocksMC extends VelocityMode {
    static Companion: Tagged$Companion;
    static INSTANCE: VelocityBlocksMC;
    // private packetHandler: EventHook<PacketEvent>;
}