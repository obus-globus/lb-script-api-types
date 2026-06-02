import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ILocalSampleLogger extends Object{
    viaFabricPlus$getForcedVersion(): ProtocolVersion;
    viaFabricPlus$setForcedVersion(arg0: ProtocolVersion): void;
}