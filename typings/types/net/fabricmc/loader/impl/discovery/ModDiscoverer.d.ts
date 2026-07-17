import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EnvType } from '../../../../../net/fabricmc/api/EnvType.d.ts'
import type { FabricLoaderImpl } from '../../../../../net/fabricmc/loader/impl/FabricLoaderImpl.d.ts'
import type { ModCandidateFinder } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateFinder.d.ts'
import type { ModCandidateFinder$ModCandidateConsumer } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateFinder$ModCandidateConsumer.d.ts'
import type { ModCandidateImpl } from '../../../../../net/fabricmc/loader/impl/discovery/ModCandidateImpl.d.ts'
import type { ModDiscoverer$ModScanTask } from '../../../../../net/fabricmc/loader/impl/discovery/ModDiscoverer$ModScanTask.d.ts'
import type { ModDiscoverer$NestedModInitData } from '../../../../../net/fabricmc/loader/impl/discovery/ModDiscoverer$NestedModInitData.d.ts'
import type { DependencyOverrides } from '../../../../../net/fabricmc/loader/impl/metadata/DependencyOverrides.d.ts'
import type { VersionOverrides } from '../../../../../net/fabricmc/loader/impl/metadata/VersionOverrides.d.ts'
export class ModDiscoverer extends Object {
    constructor(arg0: VersionOverrides, arg1: DependencyOverrides)
    // private candidateFinders: (param0: ModCandidateFinder$ModCandidateConsumer) => void[];
    // private depOverrides: DependencyOverrides;
    // private envType: EnvType;
    // private jijDedupMap: JavaMap<number, ModDiscoverer$ModScanTask>;
    // private nestedModInitDatas: ModDiscoverer$NestedModInitData[];
    readonly nonFabricMods: Path[];
    // private versionOverrides: VersionOverrides;
    addCandidateFinder(arg0: (param0: ModCandidateFinder$ModCandidateConsumer) => void): void;
    // private createJavaMod(): ModCandidateImpl;
    discoverMods(arg0: FabricLoaderImpl, arg1: JavaMap<string, ModCandidateImpl[]>): ModCandidateImpl[];
    getNonFabricMods(): Path[];
}