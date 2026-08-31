import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * ResourcePack Spoof
 *
 * Prevents servers from forcing you to download their resource pack.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferResourcePack.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferResourcePack.kt:36}
 */
export class SpooferResourcePack extends ToggleableValueGroup {
    static INSTANCE: SpooferResourcePack;
    // private packetHandler: EventHook<PacketEvent>;
}