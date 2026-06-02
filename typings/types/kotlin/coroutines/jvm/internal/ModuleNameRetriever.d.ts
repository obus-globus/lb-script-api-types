import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BaseContinuationImpl } from '../../../../kotlin/coroutines/jvm/internal/BaseContinuationImpl.d.ts'
import type { ModuleNameRetriever$Cache } from '../../../../kotlin/coroutines/jvm/internal/ModuleNameRetriever$Cache.d.ts'
export class ModuleNameRetriever extends Object {
    static INSTANCE: ModuleNameRetriever;
    // private cache: ModuleNameRetriever$Cache | null;
    // private notOnJava9: ModuleNameRetriever$Cache;
    // private buildCache(continuation: BaseContinuationImpl): ModuleNameRetriever$Cache;
    getModuleName(continuation: BaseContinuationImpl): string | null;
}