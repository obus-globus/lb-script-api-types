import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Path } from '../../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DependencyOverrides$Entry } from '../../../../../net/fabricmc/loader/impl/metadata/DependencyOverrides$Entry.d.ts'
import type { LoaderModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
export class DependencyOverrides extends Object {
    constructor(arg0: Path)
    // private dependencyOverrides: JavaMap<string, DependencyOverrides$Entry[]>;
    apply(arg0: LoaderModMetadata): void;
    getAffectedModIds(): string[];
}