import type { ITokenCacheAccessContext } from '../../../../com/microsoft/aad/msal4j/ITokenCacheAccessContext.d.ts'
import type { TokenCache } from '../../../../com/microsoft/aad/msal4j/TokenCache.d.ts'
import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TokenCache$CacheAspect extends Object implements AutoCloseable {
    constructor(null_: TokenCache, arg1: ITokenCacheAccessContext)
    // private context: ITokenCacheAccessContext;
    close(): void;
}