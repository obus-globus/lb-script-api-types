import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ProtocolDetectorService } from '../../../../com/viaversion/viaversion/api/platform/ProtocolDetectorService.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { ReadWriteLock } from '../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractProtocolDetectorService extends Object implements ProtocolDetectorService {
    constructor()
    // private detectedProtocolIds: JavaMap<any, any>;
    // private lock: ReadWriteLock;
    configuredServers(): JavaMap<string, number>;
    detectedProtocolVersions(): JavaMap<any, any>;
    lowestSupportedProtocolVersion(): ProtocolVersion;
    probeAllServers(): void;
    serverProtocolVersion(arg0: string): ProtocolVersion;
    setProtocolVersion(arg0: string, arg1: number): void;
    uncacheProtocolVersion(arg0: string): number;
}