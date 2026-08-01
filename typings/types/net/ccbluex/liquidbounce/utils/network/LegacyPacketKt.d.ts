import type { Object } from '../../../../../java/lang/Object.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L65 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:65}
     */
    static sendPacket(self: ClientCommonPacketListenerImpl, packet: LegacyPacket, onSuccess: () => void, onFailure: () => void): void;
}