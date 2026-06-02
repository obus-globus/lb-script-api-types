import type { UserConnection } from '../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Item } from '../../../../../com/viaversion/viaversion/api/minecraft/item/Item.d.ts'
import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { PacketTypesProvider } from '../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Type } from '../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ClientboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ClientboundPacket26_1.d.ts'
import type { ServerboundPacket26_1 } from '../../../../../com/viaversion/viaversion/protocols/v1_21_11to26_1/packet/ServerboundPacket26_1.d.ts'
export class ViaFabricPlusProtocol extends AbstractProtocol<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket26_1, ServerboundPacket26_1> {
    static INSTANCE: ViaFabricPlusProtocol;
    constructor()
    applySharedRegistrations(): void;
    createPacketTypesProvider(): PacketTypesProvider<ClientboundPacket26_1, ClientboundPacket26_1, ServerboundPacket26_1, ServerboundPacket26_1>;
    getClientboundCustomPayloadPacketType(): ClientboundPacketType;
    getClientboundItemType(arg0: ProtocolVersion): Type<Item>;
    getCustomPayloadPacketType(): ServerboundPacketType;
    getServerboundItemType(arg0: ProtocolVersion): Type<Item>;
    getSetCreativeModeSlot(): ServerboundPacketType;
    init(arg0: UserConnection): void;
    registerPackets(): void;
}