import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface IServerData extends Object{
    viaFabricPlus$forceVersion(arg0: ProtocolVersion): void;
    viaFabricPlus$forcedVersion(): ProtocolVersion;
    viaFabricPlus$passDirectConnectScreen(arg0: boolean): void;
    viaFabricPlus$passedDirectConnectScreen(): boolean;
    viaFabricPlus$setTranslatingVersion(arg0: ProtocolVersion): void;
    viaFabricPlus$translatingVersion(): ProtocolVersion;
}