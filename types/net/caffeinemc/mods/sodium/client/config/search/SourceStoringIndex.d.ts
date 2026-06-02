import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { SearchIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchIndex.d.ts'
import type { TextSource } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/TextSource.d.ts'
export abstract class SourceStoringIndex extends SearchIndex {
    constructor(arg0: () => void)
    // private sources: TextSource[];
    buildIndexInitial(): void;
    invalidateSourcesForRebuild(): void;
    register(arg0: TextSource): void;
}