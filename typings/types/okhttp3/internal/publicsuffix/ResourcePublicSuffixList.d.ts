import type { BasePublicSuffixList } from '../../../okhttp3/internal/publicsuffix/BasePublicSuffixList.d.ts'
import type { PublicSuffixList$Companion } from '../../../okhttp3/internal/publicsuffix/PublicSuffixList$Companion.d.ts'
import type { ResourcePublicSuffixList$Companion } from '../../../okhttp3/internal/publicsuffix/ResourcePublicSuffixList$Companion.d.ts'
import type { FileSystem } from '../../../okio/FileSystem.d.ts'
import type { Path } from '../../../okio/Path.d.ts'
import type { Source } from '../../../okio/Source.d.ts'
export class ResourcePublicSuffixList extends BasePublicSuffixList {
    static Companion: PublicSuffixList$Companion;
    static Companion: ResourcePublicSuffixList$Companion;
    static PUBLIC_SUFFIX_RESOURCE: Path;
    constructor(path: Path, fileSystem: FileSystem)
    readonly fileSystem: FileSystem;
    readonly path: Path;
    listSource(): Source;
}