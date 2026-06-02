import type { AccountCacheEntity } from '../../../../com/microsoft/aad/msal4j/AccountCacheEntity.d.ts'
import type { AuthenticationResultMetadata } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultMetadata.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { ITenantProfile } from '../../../../com/microsoft/aad/msal4j/ITenantProfile.d.ts'
import type { IdToken } from '../../../../com/microsoft/aad/msal4j/IdToken.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthenticationResult extends Object implements IAuthenticationResult {
    constructor(arg0: string, arg1: number, arg2: number, arg3: string, arg4: number, arg5: string, arg6: string, arg7: AccountCacheEntity, arg8: string, arg9: string, arg10: AuthenticationResultMetadata, arg11: boolean)
    // private accessToken: string;
    // private account: IAccount;
    // private accountCacheEntity: AccountCacheEntity;
    // private environment: string;
    // private expiresOn: number;
    // private expiresOnDate: Date;
    // private extExpiresOn: number;
    // private familyId: string;
    // private idToken: string;
    // private idTokenObject: IdToken;
    // private isPopAuthorization: boolean;
    // private metadata: AuthenticationResultMetadata;
    // private refreshOn: number;
    // private refreshToken: string;
    // private scopes: string;
    // private tenantProfile: ITenantProfile;
    accessToken(): string;
    account(): IAccount;
    accountCacheEntity(): AccountCacheEntity;
    environment(): string;
    equals(arg0: Object | null): boolean;
    expiresOn(): number;
    expiresOnDate(): Date;
    extExpiresOn(): number;
    familyId(): string;
    // private getAccount(): IAccount;
    // private getIdTokenObj(): IdToken;
    // private getTenantProfile(): ITenantProfile;
    hashCode(): number;
    idToken(): string;
    idTokenObject(): IdToken;
    isPopAuthorization(): boolean;
    metadata(): AuthenticationResultMetadata;
    metadata(): AuthenticationResultMetadata;
    refreshOn(): number;
    refreshToken(): string;
    scopes(): string;
    tenantProfile(): ITenantProfile;
}