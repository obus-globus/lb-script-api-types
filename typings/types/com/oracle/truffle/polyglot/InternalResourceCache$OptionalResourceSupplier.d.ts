import type { InternalResourceProvider } from '../../../../com/oracle/truffle/api/provider/InternalResourceProvider.d.ts'
import type { InternalResourceCache } from '../../../../com/oracle/truffle/polyglot/InternalResourceCache.d.ts'
import type { Supplier } from '../../../../java/util/function/Supplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InternalResourceCache$OptionalResourceSupplier extends Object implements Supplier<InternalResourceCache> {
    private constructor(optionalResourceProvider: InternalResourceProvider)
    // private cachedResource: InternalResourceCache;
    // private optionalResourceProvider: InternalResourceProvider;
    get(): InternalResourceCache;
}