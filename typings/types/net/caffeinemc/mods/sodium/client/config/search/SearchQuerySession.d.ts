import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { TextSource } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/TextSource.d.ts'
export interface SearchQuerySession extends Object{
    getSearchResults(arg0: string): TextSource[];
}