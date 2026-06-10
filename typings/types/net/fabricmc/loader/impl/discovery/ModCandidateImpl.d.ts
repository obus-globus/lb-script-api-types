import type { SoftReference } from '../../../../../java/lang/ref/SoftReference.d.ts'
import type { ByteBuffer } from '../../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { ModDependency } from '../../../../../net/fabricmc/loader/api/metadata/ModDependency.d.ts'
import type { DomainObject$Mod } from '../../../../../net/fabricmc/loader/impl/discovery/DomainObject$Mod.d.ts'
import type { ModLoadCondition } from '../../../../../net/fabricmc/loader/impl/discovery/ModLoadCondition.d.ts'
import type { LoaderModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
export class ModCandidateImpl extends Object implements DomainObject$Mod {
    private constructor(arg0: Path[][], arg1: string, arg2: number, arg3: LoaderModMetadata, arg4: boolean, arg5: ModCandidateImpl[])
    // private dataRef: SoftReference<ByteBuffer>;
    // private hash: number;
    readonly localPath: string;
    readonly metadata: LoaderModMetadata;
    readonly minNestLevel: number;
    readonly nestedMods: ModCandidateImpl[];
    readonly originPaths: Path[][];
    readonly parentMods: ModCandidateImpl[];
    readonly paths: Path[][];
    readonly requiresRemap: boolean;
    addParent(arg0: ModCandidateImpl): boolean;
    clearCachedData(): void;
    copyToDir(arg0: Path[], arg1: boolean): Path[];
    // private copyToFile(arg0: Path[]): void;
    // private getBestSourcingParent(): ModCandidateImpl;
    // private getData(): ByteBuffer;
    getDefaultFileName(): string;
    getDependencies(): ModDependency[];
    getId(): string;
    getLoadCondition(): ModLoadCondition;
    getLocalPath(): string;
    getMetadata(): LoaderModMetadata;
    getMinNestLevel(): number;
    getNestedMods(): ModCandidateImpl[];
    getOriginPaths(): Path[][];
    getParentMods(): ModCandidateImpl[];
    getPaths(): Path[][];
    getProvides(): string[];
    getRequiresRemap(): boolean;
    getVersion(): Version;
    hasPath(): boolean;
    isBuiltin(): boolean;
    isRoot(): boolean;
    resetMinNestLevel(): boolean;
    setData(arg0: ByteBuffer): void;
    setPaths(arg0: Path[][]): void;
    toString(): string;
    updateMinNestLevel(arg0: ModCandidateImpl): boolean;
}