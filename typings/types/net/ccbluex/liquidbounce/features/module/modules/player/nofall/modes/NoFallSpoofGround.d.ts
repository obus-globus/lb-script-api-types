import type { ModeValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
import type { NoFallSpoofGround$DistanceMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallSpoofGround$DistanceMode.d.ts'
/**
 * SpoofGround mode for the NoFall module.
 * This mode spoofs the 'onGround' flag in PlayerMoveC2SPacket to prevent fall damage.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallSpoofGround.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallSpoofGround.kt:31}
 */
export class NoFallSpoofGround extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallSpoofGround;
    // private fallDistance: ModeValueGroup<NoFallSpoofGround$DistanceMode>;
    readonly packetHandler: EventHook<PacketEvent>;
    // private resetFallDistance: boolean;
    // private /*not mapped: */ getResetFallDistance(): boolean;
}