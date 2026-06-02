import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ServerProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ServerProtocolVersion.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ServerProtocolVersionRange extends Record implements ServerProtocolVersion {
    constructor(lowestSupportedProtocolVersion: ProtocolVersion, highestSupportedProtocolVersion: ProtocolVersion, supportedProtocolVersions: ProtocolVersion[])
    // private highestSupportedProtocolVersion: ProtocolVersion;
    // private lowestSupportedProtocolVersion: ProtocolVersion;
    // private supportedProtocolVersions: ProtocolVersion[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    highestSupportedProtocolVersion(): ProtocolVersion;
    highestSupportedVersion(): number;
    isKnown(): boolean;
    lowestSupportedProtocolVersion(): ProtocolVersion;
    lowestSupportedVersion(): number;
    supportedProtocolVersions(): ProtocolVersion[];
    supportedVersions(): (Object | null)[];
    toString(): string;
}