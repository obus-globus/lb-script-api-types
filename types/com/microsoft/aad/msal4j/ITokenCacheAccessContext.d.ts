import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { ITokenCache } from '../../../../com/microsoft/aad/msal4j/ITokenCache.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ITokenCacheAccessContext extends Object{
    account(): IAccount;
    clientId(): string;
    hasCacheChanged(): boolean;
    tokenCache(): ITokenCache;
}