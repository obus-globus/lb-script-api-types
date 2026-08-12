import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { PacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
/**
 * A packet that is directly sent to the server over ViaVersion.
 *
 * This class can be implemented and sent over {@link sendPacket} to imitated behavior from older minecraft versions.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L34 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:34}
 */
export interface LegacyPacket extends Object{
    /**
     * The type of the packet.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L45 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:45}
     */
    readonly packetType: PacketType;
    /**
     * Should provide the class of the protocol from the version where the packet got removed to the version where it
     * was still present.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L40 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:40}
     */
    readonly protocol: Class<Protocol<any, any, any, any>>;
    /**
     * Writes the actual information to the {@link packetWrapper}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:50}
     */
    write(packetWrapper: PacketWrapper): void;
}