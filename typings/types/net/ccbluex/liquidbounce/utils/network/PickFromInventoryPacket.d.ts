import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Protocol1_21_2To1_21_4 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_2to1_21_4/Protocol1_21_2To1_21_4.d.ts'
import type { ServerboundPackets1_21_2 } from '../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ServerboundPackets1_21_2.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { LegacyPacket } from '../../../../../net/ccbluex/liquidbounce/utils/network/LegacyPacket.d.ts'
/**
 * https://github.com/ViaVersion/ViaFabricPlus/blob/1957a175e4a4bff50860c0b3359d5219624fe434/src/main/java/com/viaversion/viafabricplus/features/world/item_picking/ItemPick1_21_3.java#L123
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/177e1582d6f271ebe95911c43b6987f81dca51f8/src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PickFromInventoryPacket.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/network/PickFromInventoryPacket.kt:29}
 */
export class PickFromInventoryPacket extends Object implements LegacyPacket {
    constructor(slot: number)
    readonly packetType: ServerboundPackets1_21_2;
    readonly protocol: Class<Protocol1_21_2To1_21_4>;
    readonly slot: number;
    component1(): number;
    copy(slot: number): PickFromInventoryPacket;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    write(packetWrapper: PacketWrapper): void;
}