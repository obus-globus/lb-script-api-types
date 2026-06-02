import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
/**
 * @remarks
 * - **Anticheat:** Vulcan (2.8.8)
 * - **Tested on:** eu.loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallVulcanTP.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallVulcanTP.kt:27}
 */
export class NoFallVulcanTP extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallVulcanTP;
    // private packetHandler: EventHook<PacketEvent>;
    // private voidThreshold: number;
    // private /*not mapped: */ getVoidThreshold(): number;
}