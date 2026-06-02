import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ServerProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ServerProtocolVersion.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ServerProtocolVersionSingleton extends Record implements ServerProtocolVersion {
    constructor(protocolVersion: ProtocolVersion)
    // private protocolVersion: ProtocolVersion;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    highestSupportedProtocolVersion(): ProtocolVersion;
    highestSupportedVersion(): number;
    isKnown(): boolean;
    lowestSupportedProtocolVersion(): ProtocolVersion;
    lowestSupportedVersion(): number;
    protocolVersion(): ProtocolVersion;
    supportedProtocolVersions(): ProtocolVersion[];
    supportedVersions(): (Object | null)[];
    toString(): string;
}