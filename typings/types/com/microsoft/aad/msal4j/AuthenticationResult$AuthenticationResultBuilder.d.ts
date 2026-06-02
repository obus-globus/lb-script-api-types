import type { AccountCacheEntity } from '../../../../com/microsoft/aad/msal4j/AccountCacheEntity.d.ts'
import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultMetadata } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultMetadata.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthenticationResult$AuthenticationResultBuilder extends Object {
    constructor()
    // private accessToken: string;
    // private accountCacheEntity: AccountCacheEntity;
    // private environment: string;
    // private expiresOn: number;
    // private extExpiresOn: number;
    // private familyId: string;
    // private idToken: string;
    // private isPopAuthorization: boolean;
    // private metadata: AuthenticationResultMetadata;
    // private refreshOn: number;
    // private refreshToken: string;
    // private scopes: string;
    accessToken(arg0: string): AuthenticationResult$AuthenticationResultBuilder;
    accountCacheEntity(arg0: AccountCacheEntity): AuthenticationResult$AuthenticationResultBuilder;
    build(): AuthenticationResult;
    environment(arg0: string): AuthenticationResult$AuthenticationResultBuilder;
    expiresOn(arg0: number): AuthenticationResult$AuthenticationResultBuilder;
    extExpiresOn(arg0: number): AuthenticationResult$AuthenticationResultBuilder;
    familyId(arg0: string): AuthenticationResult$AuthenticationResultBuilder;
    idToken(arg0: string): AuthenticationResult$AuthenticationResultBuilder;
    isPopAuthorization(arg0: boolean): AuthenticationResult$AuthenticationResultBuilder;
    metadata(arg0: AuthenticationResultMetadata): AuthenticationResult$AuthenticationResultBuilder;
    refreshOn(arg0: number): AuthenticationResult$AuthenticationResultBuilder;
    refreshToken(arg0: string): AuthenticationResult$AuthenticationResultBuilder;
    scopes(arg0: string): AuthenticationResult$AuthenticationResultBuilder;
    toString(): string;
}