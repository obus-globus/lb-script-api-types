import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Version } from '../../../../../net/fabricmc/loader/api/Version.d.ts'
import type { LoaderModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
export class VersionOverrides extends Object {
    constructor()
    // private replacements: JavaMap<string, Version>;
    apply(arg0: LoaderModMetadata): void;
    getAffectedModIds(): string[];
}