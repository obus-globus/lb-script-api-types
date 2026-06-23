import type { URL } from '../../../java/net/URL.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { ModContainer as ModContainer_2 } from '../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { ModMetadata } from '../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { ModOrigin } from '../../../net/fabricmc/loader/api/metadata/ModOrigin.d.ts'
import type { LoaderModMetadata } from '../../../net/fabricmc/loader/metadata/LoaderModMetadata.d.ts'
export abstract class ModContainer extends Object implements ModContainer_2 {
    constructor()
    findPath(arg0: string): Optional<Path[]>;
    getCodeSourcePaths(): Path[][];
    getInfo(): LoaderModMetadata;
    getMetadata(): ModMetadata;
    getOrigin(): ModOrigin;
    getOriginUrl(): URL;
    getPath(arg0: string): Path[];
    getRoot(): Path[];
    getRootPath(): Path[];
}