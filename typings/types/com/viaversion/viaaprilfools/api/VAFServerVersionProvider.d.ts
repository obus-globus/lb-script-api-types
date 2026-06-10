import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { VersionProvider } from '../../../../com/viaversion/viaversion/api/protocol/version/VersionProvider.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class VAFServerVersionProvider extends Object implements VersionProvider {
    constructor(arg0: (param0: UserConnection) => ProtocolVersion)
    // private delegate: (param0: UserConnection) => ProtocolVersion;
    getClientProtocol(arg0: UserConnection): ProtocolVersion;
    getClosestServerProtocol(arg0: UserConnection): ProtocolVersion;
    getServerProtocol(arg0: UserConnection): ProtocolVersion;
}