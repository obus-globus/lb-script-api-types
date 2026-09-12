import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * ResourcePack Spoof
 *
 * Prevents servers from forcing you to download their resource pack.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/f0d427e933b0c39374cea4bd371582db202074f3/src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferResourcePack.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferResourcePack.kt:36}
 */
export class SpooferResourcePack extends ToggleableValueGroup {
    static INSTANCE: SpooferResourcePack;
    // private packetHandler: EventHook<PacketEvent>;
}