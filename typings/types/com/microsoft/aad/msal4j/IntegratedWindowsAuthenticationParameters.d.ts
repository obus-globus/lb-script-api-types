import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder } from '../../../../com/microsoft/aad/msal4j/IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IntegratedWindowsAuthenticationParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string[], paramarg1: string): IntegratedWindowsAuthenticationParameters$IntegratedWindowsAuthenticationParametersBuilder;
    private constructor(arg0: string[], arg1: string, arg2: ClaimsRequest, arg3: JavaMap<string, string>, arg4: JavaMap<string, string>, arg5: string)
    // private claims: ClaimsRequest;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private scopes: string[];
    // private tenant: string;
    // private username: string;
    claims(): ClaimsRequest;
    extraHttpHeaders(): JavaMap<string, string>;
    extraQueryParameters(): JavaMap<string, string>;
    scopes(): string[];
    tenant(): string;
    username(): string;
}