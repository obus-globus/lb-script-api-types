import type { Protocol1_12To1_11_1 } from '../../../../../com/viaversion/viabackwards/protocol/v1_12to1_11_1/Protocol1_12To1_11_1.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPackets1_9_3 } from '../../../../../com/viaversion/viaversion/protocols/v1_9_1to1_9_3/packet/ServerboundPackets1_9_3.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LegacyPacket } from '../../../../../net/ccbluex/liquidbounce/utils/network/LegacyPacket.d.ts'
/**
 * https://github.com/ViaVersion/ViaFabricPlus/blob/ecd5d188187f2ebaaad8ded0ffe53538911f7898/src/main/java/de/florianmichael/viafabricplus/injection/mixin/fixes/minecraft/MixinMinecraftClient.java#L124-L130
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cd6fab2c64d4683279fb8734248e80c1cfb2b0f2/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/OpenInventorySilentlyPacket.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/OpenInventorySilentlyPacket.kt:29}
 */
export class OpenInventorySilentlyPacket extends Object implements LegacyPacket {
    static INSTANCE: OpenInventorySilentlyPacket;
    readonly packetType: ServerboundPackets1_9_3;
    readonly protocol: Class<Protocol1_12To1_11_1>;
    write(packetWrapper: PacketWrapper): void;
}