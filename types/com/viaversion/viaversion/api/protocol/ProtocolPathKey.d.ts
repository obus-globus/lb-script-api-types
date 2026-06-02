import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ProtocolPathKey extends Object{
    clientProtocolVersion(): ProtocolVersion;
    serverProtocolVersion(): ProtocolVersion;
}