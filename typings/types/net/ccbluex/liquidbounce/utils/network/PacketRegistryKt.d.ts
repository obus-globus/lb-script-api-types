import type { JavaMap } from '../../../../../JavaMap.d.ts'
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b7cc679e71b1bc95d19a1e1535f79a1c2164149e/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketRegistry.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PacketRegistry.kt:35}
     */
    static getPacketRegistry(): JavaMap<PacketFlow, Identifier[]>;
}