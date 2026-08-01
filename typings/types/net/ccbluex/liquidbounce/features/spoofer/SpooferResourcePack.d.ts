import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * ResourcePack Spoof
 *
 * Prevents servers from forcing you to download their resource pack.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferResourcePack.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferResourcePack.kt:36}
 */
export class SpooferResourcePack extends ToggleableValueGroup {
    static INSTANCE: SpooferResourcePack;
    // private packetHandler: EventHook<PacketEvent>;
}