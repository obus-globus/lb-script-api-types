import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultSupplier } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultSupplier.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { OAuthAuthorizationGrant } from '../../../../com/microsoft/aad/msal4j/OAuthAuthorizationGrant.d.ts'
import type { WSTrustResponse } from '../../../../com/microsoft/aad/msal4j/WSTrustResponse.d.ts'
export class AcquireTokenByAuthorizationGrantSupplier extends AuthenticationResultSupplier {
    constructor(arg0: AbstractApplicationBase, arg1: MsalRequest, arg2: Authority)
    // private msalRequest: MsalRequest;
    // private requestAuthority: Authority;
    // private IsUiRequiredCacheSupported(): boolean;
    execute(): AuthenticationResult;
    // private getAuthorizationGrantIntegrated(arg0: string): JavaMap<string, string>;
    // private getSAMLAuthGrantParameters(arg0: WSTrustResponse): JavaMap<string, string>;
    // private processPasswordGrant(arg0: OAuthAuthorizationGrant): void;
}