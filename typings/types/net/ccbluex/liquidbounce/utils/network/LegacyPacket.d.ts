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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:29}
 */
export interface LegacyPacket extends Object{
    /**
     * The type of the packet.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L42 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:42}
     */
    readonly packetType: PacketType;
    /**
     * Should provide the class of the protocol from the version where the packet got removed to the version where it
     * was still present.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:36}
     */
    readonly protocol: Class<Protocol<any, any, any, any>>;
    /**
     * Writes the actual information to the {@link packetWrapper}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt#L47 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/LegacyPacket.kt:47}
     */
    write(packetWrapper: PacketWrapper): void;
}