import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder } from '../../../../com/microsoft/aad/msal4j/IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IntegratedWindowsAuthenticationParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[], paramarg1: string): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    private constructor(arg0: string[], arg1: string, arg2: ClaimsRequest, arg3: { [key: string]: string }, arg4: { [key: string]: string }, arg5: string)
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private scopes: string[];
    // private tenant: string;
    // private username: string;
    claims(): ClaimsRequest;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    scopes(): string[];
    tenant(): string;
    username(): string;
}