import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { MovementInputEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/MovementInputEvent.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { SprintEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/SprintEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
import type { Vec3 } from '../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Does not work in server version 1.8 and below.
 *
 * @author jiuxian_baka
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/26472f4415000921e37ac654ef9e544e7d3750c9/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallSpoofLanding.kt#L44 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallSpoofLanding.kt:44}
 */
export class NoFallSpoofLanding extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallSpoofLanding;
    // private flag: boolean;
    // private modification: Vec3;
    // private /*not mapped: */ getModification(): Vec3;
    // private movementHandler: EventHook<MovementInputEvent>;
    // private packetHandler: EventHook<PacketEvent>;
    // private prevFallDistance: number;
    // private prevOnGround: boolean;
    // private sprintHandler: EventHook<SprintEvent>;
    disable(): void;
}