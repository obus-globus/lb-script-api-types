import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Provider } from '../../../../../../com/viaversion/viaversion/api/platform/providers/Provider.d.ts'
import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface VersionProvider extends Provider, Object{
    getClientProtocol(arg0: UserConnection): ProtocolVersion;
    getClosestServerProtocol(arg0: UserConnection): ProtocolVersion;
    getServerProtocol(arg0: UserConnection): ProtocolVersion;
}