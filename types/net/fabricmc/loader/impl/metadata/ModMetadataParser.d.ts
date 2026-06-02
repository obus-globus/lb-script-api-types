import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { DependencyOverrides } from '../../../../../net/fabricmc/loader/impl/metadata/DependencyOverrides.d.ts'
import type { LoaderModMetadata } from '../../../../../net/fabricmc/loader/impl/metadata/LoaderModMetadata.d.ts'
import type { VersionOverrides } from '../../../../../net/fabricmc/loader/impl/metadata/VersionOverrides.d.ts'
export class ModMetadataParser extends Object {
    static IGNORED_KEYS: string[];
    static LATEST_VERSION: number;
    static parseMetadata(paramarg0: InputStream, paramarg1: string, paramarg2: string[], paramarg3: VersionOverrides, paramarg4: DependencyOverrides, paramarg5: boolean): LoaderModMetadata;
    private constructor()
}