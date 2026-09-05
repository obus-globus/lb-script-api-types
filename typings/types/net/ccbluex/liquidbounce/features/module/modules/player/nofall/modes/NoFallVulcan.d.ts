import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { NoFallMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallMode.d.ts'
/**
 * @anticheat Vulcan
 * @anticheatVersion 2.7.7
 * @testedOn eu.loyisa.cn
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallVulcan.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/nofall/modes/NoFallVulcan.kt:30}
 */
export class NoFallVulcan extends NoFallMode {
    static Companion: Tagged$Companion;
    static INSTANCE: NoFallVulcan;
    readonly packetHandler: EventHook<PacketEvent>;
}