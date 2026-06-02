import type { UserConnection } from '../../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ProtocolVersion } from '../../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { BaseVersionProvider } from '../../../../../../../com/viaversion/viaversion/protocol/version/BaseVersionProvider.d.ts'
export class ViaFabricPlusBaseVersionProvider extends BaseVersionProvider {
    constructor()
    getClosestServerProtocol(arg0: UserConnection): ProtocolVersion;
}