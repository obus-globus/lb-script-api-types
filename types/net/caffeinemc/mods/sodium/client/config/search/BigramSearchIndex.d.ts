import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { BigramSearchIndex$BigramSources } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/BigramSearchIndex$BigramSources.d.ts'
import type { SearchQuerySession } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchQuerySession.d.ts'
import type { SourceStoringIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SourceStoringIndex.d.ts'
export class BigramSearchIndex extends SourceStoringIndex {
    constructor(arg0: () => void)
    // private bigramIndex: { [key: string]: BigramSearchIndex$BigramSources };
    createQuery(): SearchQuerySession;
    rebuildIndex(): void;
}