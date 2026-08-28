import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ServerboundPackets1_21_5 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_4to1_21_5/packet/ServerboundPackets1_21_5.d.ts'
import type { Protocol1_21_5To1_21_6 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/Protocol1_21_5To1_21_6.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { LegacyPacket } from '../../../../../net/ccbluex/liquidbounce/utils/network/LegacyPacket.d.ts'
/**
 * https://github.com/ViaVersion/ViaFabricPlus/blob/56c4959000e68d77fd415b89af7a95478d825079/src/main/java/com/viaversion/viafabricplus/injection/mixin/features/movement/sprinting_and_sneaking/MixinClientPlayerEntity.java#L251-L264
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PlayerSneakPacket.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PlayerSneakPacket.kt:31}
 */
export class PlayerSneakPacket extends Enum<PlayerSneakPacket> implements LegacyPacket {
    static START: PlayerSneakPacket;
    static STOP: PlayerSneakPacket;
    static getEntries(): PlayerSneakPacket[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): PlayerSneakPacket;
    static values(): PlayerSneakPacket[];
    private constructor(sneaking: boolean)
    readonly packetType: ServerboundPackets1_21_5;
    readonly protocol: Class<Protocol1_21_5To1_21_6>;
    sneaking: boolean;
    write(packetWrapper: PacketWrapper): void;
    name(): "START" | "STOP";
}