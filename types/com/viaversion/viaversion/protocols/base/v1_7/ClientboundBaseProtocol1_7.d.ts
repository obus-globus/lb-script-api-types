import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { AbstractProtocol } from '../../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketTypesProvider } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/provider/PacketTypesProvider.d.ts'
import type { BaseClientboundPacket } from '../../../../../../com/viaversion/viaversion/protocols/base/packet/BaseClientboundPacket.d.ts'
import type { BaseServerboundPacket } from '../../../../../../com/viaversion/viaversion/protocols/base/packet/BaseServerboundPacket.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
export class ClientboundBaseProtocol1_7 extends AbstractProtocol<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket> {
    static addDashes(paramarg0: string): string;
    static onLoginSuccess(paramarg0: UserConnection): void;
    constructor()
    createPacketTypesProvider(): PacketTypesProvider<BaseClientboundPacket, BaseClientboundPacket, BaseServerboundPacket, BaseServerboundPacket>;
    isBaseProtocol(): boolean;
    passthroughUUID(arg0: PacketWrapper): UUID;
    registerPackets(): void;
}