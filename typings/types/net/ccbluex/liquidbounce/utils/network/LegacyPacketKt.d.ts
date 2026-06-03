import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../kotlin/jvm/functions/Function0.d.ts'
import type { LegacyPacket } from '../../../../../net/ccbluex/liquidbounce/utils/network/LegacyPacket.d.ts'
import type { ClientCommonPacketListenerImpl } from '../../../../../net/minecraft/client/multiplayer/ClientCommonPacketListenerImpl.d.ts'
export class LegacyPacketKt extends Object {
    /**
     * Sends the {@link packet}.
     *
     * Make sure to check if ViaFabricPlus is loaded before using this or constructing the packet.
     *
     * Keep in mind, the packet won't be caught by the packet event.
     *
     * @param onSuccess Gets executed when sending succeeds.
     * @param onFailure Gets executed when sending fails.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:55}
     */
    static sendPacket(clientCommonPacketListenerImpl: ClientCommonPacketListenerImpl, packet: LegacyPacket, onSuccess: Function0<void>, onFailure: Function0<void>): void;
}