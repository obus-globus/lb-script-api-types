import type { BlockedProtocolVersions } from '../../../../com/viaversion/viaversion/api/protocol/version/BlockedProtocolVersions.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class BlockedProtocolVersionsImpl extends Record implements BlockedProtocolVersions {
    constructor(singleBlockedVersions: ProtocolVersion[], blocksBelow: ProtocolVersion, blocksAbove: ProtocolVersion)
    // private blocksAbove: ProtocolVersion;
    // private blocksBelow: ProtocolVersion;
    // private singleBlockedVersions: ProtocolVersion[];
    blocksAbove(): ProtocolVersion;
    blocksBelow(): ProtocolVersion;
    contains(arg0: ProtocolVersion): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    singleBlockedVersions(): ProtocolVersion[];
    toString(): string;
}