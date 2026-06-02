import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ChangeProtocolVersionCallback extends Object{
    onChangeProtocolVersion(arg0: ProtocolVersion, arg1: ProtocolVersion): void;
}