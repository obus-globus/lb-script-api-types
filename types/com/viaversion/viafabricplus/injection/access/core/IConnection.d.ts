import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IConnection extends Object{
    viaFabricPlus$getTargetVersion(): ProtocolVersion;
    viaFabricPlus$getUserConnection(): UserConnection;
    viaFabricPlus$setTargetVersion(arg0: ProtocolVersion): void;
    viaFabricPlus$setUserConnection(arg0: UserConnection): void;
    viaFabricPlus$setupPreNettyDecryption(): void;
}