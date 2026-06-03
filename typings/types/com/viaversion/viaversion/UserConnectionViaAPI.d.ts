import type { ViaAPIBase } from '../../../com/viaversion/viaversion/ViaAPIBase.d.ts'
import type { UserConnection } from '../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ProtocolVersion } from '../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ByteBuf } from '../../../io/netty/buffer/ByteBuf.d.ts'
import type { UUID } from '../../../java/util/UUID.d.ts'
export class UserConnectionViaAPI extends ViaAPIBase<UserConnection> {
    constructor()
    getPlayerProtocolVersion(arg0: UserConnection): ProtocolVersion;
    getPlayerProtocolVersion(arg0: UUID): ProtocolVersion;
    sendRawPacket(arg0: UserConnection, arg1: ByteBuf): void;
    sendRawPacket(arg0: UUID, arg1: ByteBuf): void;
}