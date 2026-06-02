import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { ITokenCache } from '../../../../com/microsoft/aad/msal4j/ITokenCache.d.ts'
import type { ITokenCacheAccessContext } from '../../../../com/microsoft/aad/msal4j/ITokenCacheAccessContext.d.ts'
import type { TokenCacheAccessContext$TokenCacheAccessContextBuilder } from '../../../../com/microsoft/aad/msal4j/TokenCacheAccessContext$TokenCacheAccessContextBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TokenCacheAccessContext extends Object implements ITokenCacheAccessContext {
    static builder(): TokenCacheAccessContext$TokenCacheAccessContextBuilder;
    constructor(arg0: ITokenCache, arg1: string, arg2: IAccount, arg3: boolean)
    // private account: IAccount;
    // private clientId: string;
    // private hasCacheChanged: boolean;
    // private tokenCache: ITokenCache;
    account(): IAccount;
    clientId(): string;
    hasCacheChanged(): boolean;
    tokenCache(): ITokenCache;
}