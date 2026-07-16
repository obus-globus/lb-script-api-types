import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModMetadata } from '../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { ModOrigin } from '../../../../net/fabricmc/loader/api/metadata/ModOrigin.d.ts'
export interface ModContainer extends Object{
    findPath(arg0: string): Optional<Path>;
    getContainedMods(): ModContainer[];
    getContainingMod(): Optional<ModContainer>;
    getMetadata(): ModMetadata;
    getOrigin(): ModOrigin;
    getPath(arg0: string): Path;
    getRoot(): Path;
    getRootPath(): Path;
    getRootPaths(): Path[];
}