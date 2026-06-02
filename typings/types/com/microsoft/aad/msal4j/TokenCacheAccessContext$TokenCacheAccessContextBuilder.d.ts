import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { ITokenCache } from '../../../../com/microsoft/aad/msal4j/ITokenCache.d.ts'
import type { TokenCacheAccessContext } from '../../../../com/microsoft/aad/msal4j/TokenCacheAccessContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TokenCacheAccessContext$TokenCacheAccessContextBuilder extends Object {
    constructor()
    // private account: IAccount;
    // private clientId: string;
    // private hasCacheChanged: boolean;
    // private tokenCache: ITokenCache;
    account(arg0: IAccount): TokenCacheAccessContext$TokenCacheAccessContextBuilder;
    build(): TokenCacheAccessContext;
    clientId(arg0: string): TokenCacheAccessContext$TokenCacheAccessContextBuilder;
    hasCacheChanged(arg0: boolean): TokenCacheAccessContext$TokenCacheAccessContextBuilder;
    toString(): string;
    tokenCache(arg0: ITokenCache): TokenCacheAccessContext$TokenCacheAccessContextBuilder;
}