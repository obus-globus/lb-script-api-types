import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface BlockedProtocolVersions extends Object{
    blocksAbove(): ProtocolVersion;
    blocksBelow(): ProtocolVersion;
    contains(arg0: ProtocolVersion): boolean;
    singleBlockedVersions(): ProtocolVersion[];
}