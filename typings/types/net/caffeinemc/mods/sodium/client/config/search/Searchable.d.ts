import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SearchIndex } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchIndex.d.ts'
export interface Searchable extends Object{
    registerTextSources(arg0: SearchIndex): void;
}