import type { AbstractProtocol } from '../../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketTypesProvider } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { BaseClientboundPacket } from '../../../../../../com/viaversion/viaversion/protocols/base/packet/BaseClientboundPacket.d.ts'
import type { BaseServerboundPacket } from '../../../../../../com/viaversion/viaversion/protocols/base/packet/BaseServerboundPacket.d.ts'
export class ServerboundBaseProtocol1_7 extends AbstractProtocol<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket> {
    constructor()
    createPacketTypesProvider(): PacketTypesProvider<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket>;
    isBaseProtocol(): boolean;
    registerPackets(): void;
}