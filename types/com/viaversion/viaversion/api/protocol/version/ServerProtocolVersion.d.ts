import type { ProtocolVersion } from '../../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ServerProtocolVersion extends Object{
    highestSupportedProtocolVersion(): ProtocolVersion;
    highestSupportedVersion(): number;
    isKnown(): boolean;
    lowestSupportedProtocolVersion(): ProtocolVersion;
    lowestSupportedVersion(): number;
    supportedProtocolVersions(): ProtocolVersion[];
    supportedVersions(): (Object | null)[];
}