import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AuthorizationCodeParameters$AuthorizationCodeParametersBuilder } from '../../../../com/microsoft/aad/msal4j/AuthorizationCodeParameters$AuthorizationCodeParametersBuilder.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthorizationCodeParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string, paramarg1: URI): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    private constructor(arg0: string, arg1: URI, arg2: string[], arg3: ClaimsRequest, arg4: string, arg5: JavaMap<string, string>, arg6: JavaMap<string, string>, arg7: string)
    // private authorizationCode: string;
    // private claims: ClaimsRequest;
    // private codeVerifier: string;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private redirectUri: URI;
    // private scopes: string[];
    // private tenant: string;
    authorizationCode(): string;
    claims(): ClaimsRequest;
    codeVerifier(): string;
    extraHttpHeaders(): JavaMap<string, string>;
    extraQueryParameters(): JavaMap<string, string>;
    redirectUri(): URI;
    scopes(): string[];
    tenant(): string;
}