import type { ILocalSampleLogger } from '../../../../com/viaversion/viafabricplus/injection/access/core/ILocalSampleLogger.d.ts'
import type { ProtocolVersion } from '../../../../com/viaversion/viaversion/api/protocol/version/ProtocolVersion.d.ts'
import type { AbstractSampleLogger } from '../../../../net/minecraft/util/debugchart/AbstractSampleLogger.d.ts'
import type { SampleStorage } from '../../../../net/minecraft/util/debugchart/SampleStorage.d.ts'
export class LocalSampleLogger extends AbstractSampleLogger implements ILocalSampleLogger, SampleStorage {
    static CAPACITY: number;
    constructor(dimensions: number)
    constructor(dimensions: number, defaults: number[])
    // private samples: number[][];
    // private size: number;
    // private start: number;
    // private viaFabricPlus$forcedVersion: ProtocolVersion;
    capacity(): number;
    get(index: number): number;
    get(index: number, dimension: number): number;
    reset(): void;
    size(): number;
    useSample(): void;
    viaFabricPlus$getForcedVersion(): ProtocolVersion;
    viaFabricPlus$setForcedVersion(arg0: ProtocolVersion): void;
    // private wrapIndex(index: number): number;
}