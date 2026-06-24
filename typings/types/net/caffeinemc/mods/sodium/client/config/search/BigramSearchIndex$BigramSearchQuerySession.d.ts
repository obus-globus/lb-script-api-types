import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BigramSearchIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/BigramSearchIndex.d.ts'
import type { SearchQuerySession } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchQuerySession.d.ts'
import type { TextSource } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/TextSource.d.ts'
export class BigramSearchIndex$BigramSearchQuerySession extends Object implements SearchQuerySession {
    private constructor(null_: BigramSearchIndex)
    getSearchResults(arg0: string): TextSource[];
}