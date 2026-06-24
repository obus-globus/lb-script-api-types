import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PacketFlow } from '../../../../../net/minecraft/network/protocol/PacketFlow.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class PacketRegistryKt extends Object {
    /**
     * A registry for packet types, allowing registration of packet identifiers
     * for both clientbound and serverbound packets.
     * This is used to keep track of which packets are registered for each side of the network.
     *
     * Be aware that serverbound means packets sent from the client to the server (C2S),
     * and clientbound means packets sent from the server to the client (S2C).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketRegistry.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketRegistry.kt:27}
     */
    static getPacketRegistry(): { [key in PacketFlow]: Identifier[] };
}