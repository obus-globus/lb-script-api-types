import type { Protocol } from '../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ProtocolPathEntry extends Object{
    outputProtocolVersion(): ProtocolVersion;
    protocol(): Protocol<any, any, any, any>;
}