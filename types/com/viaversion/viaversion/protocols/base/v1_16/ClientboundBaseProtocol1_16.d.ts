import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { ClientboundBaseProtocol1_7 } from '../../../../../../com/viaversion/viaversion/protocols/base/v1_7/ClientboundBaseProtocol1_7.d.ts'
import type { UUID } from '../../../../../../java/util/UUID.d.ts'
export class ClientboundBaseProtocol1_16 extends ClientboundBaseProtocol1_7 {
    static addDashes(paramarg0: string): string;
    static onLoginSuccess(paramarg0: UserConnection): void;
    constructor()
    passthroughUUID(arg0: PacketWrapper): UUID;
}