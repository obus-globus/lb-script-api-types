import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { ManagedIdentityParameters$ManagedIdentityParametersBuilder } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityParameters$ManagedIdentityParametersBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ManagedIdentityParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string): ManagedIdentityParameters$ManagedIdentityParametersBuilder;
    private constructor(arg0: string, arg1: boolean, arg2: string)
    // private claims: string;
    // private forceRefresh: boolean;
    // private resource: string;
    // private revokedTokenHash: string;
    claims(): ClaimsRequest;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    forceRefresh(): boolean;
    resource(): string;
    revokedTokenHash(): string;
    scopes(): string[];
    tenant(): string;
}