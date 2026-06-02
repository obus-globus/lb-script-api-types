import type { ProtocolDetectorService } from '../../../../com/viaversion/viaversion/api/platform/ProtocolDetectorService.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ReadWriteLock } from '../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractProtocolDetectorService extends Object implements ProtocolDetectorService {
    constructor()
    // private detectedProtocolIds: Object2IntMap<string>;
    // private lock: ReadWriteLock;
    configuredServers(): { [key: string]: number };
    detectedProtocolVersions(): Object2IntMap<string>;
    lowestSupportedProtocolVersion(): ProtocolVersion;
    serverProtocolVersion(arg0: string): ProtocolVersion;
    setProtocolVersion(arg0: string, arg1: number): void;
    uncacheProtocolVersion(arg0: string): number;
}