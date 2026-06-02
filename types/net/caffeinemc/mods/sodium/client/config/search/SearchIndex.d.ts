import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { SearchQuerySession } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/SearchQuerySession.d.ts'
import type { TextSource } from '../../../../../../../net/caffeinemc/mods/sodium/client/config/search/TextSource.d.ts'
import type { Language } from '../../../../../../../net/minecraft/locale/Language.d.ts'
export abstract class SearchIndex extends Object {
    constructor(arg0: () => void)
    // private builtLanguage: Language;
    // private registerCallback: () => void;
    buildIndexInitial(): void;
    createQuery(): SearchQuerySession;
    invalidateSourcesForRebuild(): void;
    rebuildIndex(): void;
    register(arg0: TextSource): void;
    startQuery(): SearchQuerySession;
}