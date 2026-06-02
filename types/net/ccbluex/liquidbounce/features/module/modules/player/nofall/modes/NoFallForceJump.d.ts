import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
/**
 * NoFallForceJump mode for the NoFall module.
 * This mode forces the player to jump just when his about to land,
 * preventing fall damage.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallForceJump.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallForceJump.kt:28}
 */
export class NoFallForceJump extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallForceJump;
    // private blockDistance: number;
    // private /*not mapped: */ getBlockDistance(): number;
    // private fallDistance: number;
    // private /*not mapped: */ getFallDistance(): number;
    // private jumpHeight: number;
    // private /*not mapped: */ getJumpHeight(): number;
    // private jumpTriggered: boolean;
    /**
     * Handles the packet event to check if a force jump should be triggered.
     * This is done by checking if the player's fall distance is higher than the specific (fallDistance)
     * and if the player is above a nonair block by the specific block distance.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallForceJump.kt#L41 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallForceJump.kt:41}
     */
    readonly packetHandler: EventHook<PacketEvent>;
    // private collidesBottomVertical(): boolean;
    // private forceJump(): void;
}