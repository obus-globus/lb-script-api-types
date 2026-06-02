import type { AuthenticationResultMetadata } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultMetadata.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { ITenantProfile } from '../../../../com/microsoft/aad/msal4j/ITenantProfile.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Date } from '../../../../java/util/Date.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IAuthenticationResult extends Serializable, Object{
    accessToken(): string;
    account(): IAccount;
    environment(): string;
    expiresOnDate(): Date;
    idToken(): string;
    metadata(): AuthenticationResultMetadata;
    scopes(): string;
    tenantProfile(): ITenantProfile;
}