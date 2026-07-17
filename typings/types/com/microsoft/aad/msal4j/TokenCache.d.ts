import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { JsonReader } from '../../../../com/azure/json/JsonReader.d.ts'
import type { JsonWriter } from '../../../../com/azure/json/JsonWriter.d.ts'
import type { ReadValueCallback } from '../../../../com/azure/json/ReadValueCallback.d.ts'
import type { AccessTokenCacheEntity } from '../../../../com/microsoft/aad/msal4j/AccessTokenCacheEntity.d.ts'
import type { AccountCacheEntity } from '../../../../com/microsoft/aad/msal4j/AccountCacheEntity.d.ts'
import type { AppMetadataCacheEntity } from '../../../../com/microsoft/aad/msal4j/AppMetadataCacheEntity.d.ts'
import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { Credential } from '../../../../com/microsoft/aad/msal4j/Credential.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { ITokenCache } from '../../../../com/microsoft/aad/msal4j/ITokenCache.d.ts'
import type { ITokenCacheAccessAspect } from '../../../../com/microsoft/aad/msal4j/ITokenCacheAccessAspect.d.ts'
import type { IUserAssertion } from '../../../../com/microsoft/aad/msal4j/IUserAssertion.d.ts'
import type { IdTokenCacheEntity } from '../../../../com/microsoft/aad/msal4j/IdTokenCacheEntity.d.ts'
import type { RefreshTokenCacheEntity } from '../../../../com/microsoft/aad/msal4j/RefreshTokenCacheEntity.d.ts'
import type { TokenRequestExecutor } from '../../../../com/microsoft/aad/msal4j/TokenRequestExecutor.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { ReadWriteLock } from '../../../../java/util/concurrent/locks/ReadWriteLock.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TokenCache extends Object implements ITokenCache {
    constructor()
    constructor(arg0: ITokenCacheAccessAspect)
    // private accessTokens: JavaMap<string, AccessTokenCacheEntity>;
    // private accounts: JavaMap<string, AccountCacheEntity>;
    // private appMetadata: JavaMap<string, AppMetadataCacheEntity>;
    // private idTokens: JavaMap<string, IdTokenCacheEntity>;
    // private lock: ReadWriteLock;
    // private refreshTokens: JavaMap<string, RefreshTokenCacheEntity>;
    // private serializedCachedSnapshot: string;
    // private tokenCacheAccessAspect: ITokenCacheAccessAspect;
    deserialize(arg0: string): void;
    // private deserializeCollection<T extends unknown>(arg0: JsonReader, arg1: JavaMap<string, T>, arg2: (param0: JsonReader) => T): void;
    // private deserializeFromJson(arg0: JsonReader): void;
    // private getAccessTokenCacheEntity(arg0: IAccount, arg1: Authority, arg2: string[], arg3: string, arg4: string[]): Optional<AccessTokenCacheEntity>;
    // private getAccountCacheEntity(arg0: IAccount, arg1: string[]): Optional<AccountCacheEntity>;
    // private getAccountCacheEntity(arg0: string[], arg1: string): Optional<AccountCacheEntity>;
    getAccounts(arg0: string): IAccount[];
    // private getAnyFamilyRefreshTokenCacheEntity(arg0: IAccount, arg1: string[]): Optional<RefreshTokenCacheEntity>;
    // private getApplicationAccessTokenCacheEntity(arg0: Authority, arg1: string[], arg2: string, arg3: string[], arg4: string): Optional<AccessTokenCacheEntity>;
    // private getApplicationFamilyId(arg0: string, arg1: string[]): string;
    getCachedAuthenticationResult(arg0: Authority, arg1: string[], arg2: string, arg3: IUserAssertion): AuthenticationResult;
    getCachedAuthenticationResult(arg0: IAccount, arg1: Authority, arg2: string[], arg3: string): AuthenticationResult;
    // private getFamilyClientIds(arg0: string, arg1: string[]): string[];
    // private getIdTokenCacheEntity(arg0: Authority, arg1: string, arg2: string[], arg3: string): Optional<IdTokenCacheEntity>;
    // private getIdTokenCacheEntity(arg0: IAccount, arg1: Authority, arg2: string, arg3: string[]): Optional<IdTokenCacheEntity>;
    // private getIdTokenKey(arg0: string, arg1: string, arg2: string, arg3: string): string;
    // private getRefreshTokenCacheEntity(arg0: IAccount, arg1: string, arg2: string[]): Optional<RefreshTokenCacheEntity>;
    // private getRefreshTokenCacheEntity(arg0: string, arg1: string[], arg2: string): Optional<RefreshTokenCacheEntity>;
    // private isMatchingScopes(arg0: AccessTokenCacheEntity, arg1: string[]): boolean;
    // private mergeCache(arg0: TokenCache): void;
    // private mergeWithExistingCache(): string;
    // private removeAccount(arg0: IAccount): void;
    removeAccount(arg0: string, arg1: IAccount): void;
    saveTokens(arg0: TokenRequestExecutor, arg1: AuthenticationResult, arg2: string): void;
    serialize(): string;
    // private serializeToJson(): string;
    // private userAssertionHashMatches(arg0: AccountCacheEntity, arg1: string): boolean;
    // private userAssertionHashMatches(arg0: Credential, arg1: string): boolean;
    // private writeCollection<T extends unknown>(arg0: JsonWriter, arg1: string, arg2: JavaMap<string, T>): void;
}