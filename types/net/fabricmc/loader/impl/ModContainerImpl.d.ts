import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { ModContainer } from '../../../../net/fabricmc/loader/ModContainer.d.ts'
import type { ModContainer } from '../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { ModOrigin } from '../../../../net/fabricmc/loader/api/metadata/ModOrigin.d.ts'
import type { ModCandidateImpl } from '../../../../net/fabricmc/loader/impl/discovery/ModCandidateImpl.d.ts'
import type { LoaderModMetadata } from '../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
export class ModContainerImpl extends ModContainer {
    constructor(arg0: ModCandidateImpl)
    // private childModIds: E[];
    readonly codeSourcePaths: Path[][];
    readonly info: LoaderModMetadata;
    readonly origin: ModOrigin;
    // private parentModId: string;
    // private roots: Path[][];
    // private warnedClose: boolean;
    // private checkFsOpen(arg0: Path[][]): boolean;
    getCodeSourcePaths(): Path[][];
    getContainedMods(): E[];
    getContainingMod(): Optional<ModContainer>;
    getInfo(): LoaderModMetadata;
    getMetadata(): LoaderModMetadata;
    getOrigin(): ModOrigin;
    getPath(arg0: string): Path[];
    getRootPath(): Path[];
    getRootPaths(): Path[][];
    // private obtainRootPaths(): Path[][];
    toString(): string;
}