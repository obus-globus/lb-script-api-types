import type { ProtocolVersion } from '../../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ProtocolDetectorService extends Object{
    detectedProtocolVersions(): Object2IntMap<string>;
    probeAllServers(): void;
    serverProtocolVersion(arg0: string): ProtocolVersion;
    setProtocolVersion(arg0: string, arg1: number): void;
    uncacheProtocolVersion(arg0: string): number;
}