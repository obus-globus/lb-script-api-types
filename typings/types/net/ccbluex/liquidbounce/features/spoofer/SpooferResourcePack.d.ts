import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
/**
 * ResourcePack Spoof
 *
 * Prevents servers from forcing you to download their resource pack.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferResourcePack.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/spoofer/SpooferResourcePack.kt:36}
 */
export class SpooferResourcePack extends ToggleableValueGroup {
    static INSTANCE: SpooferResourcePack;
    // private packetHandler: EventHook<PacketEvent>;
}