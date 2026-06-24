import type { AuthorizationCodeParameters$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AuthorizationCodeParameters$AuthorizationCodeParametersBuilder } from '../../../../com/microsoft/aad/msal4j/AuthorizationCodeParameters$AuthorizationCodeParametersBuilder.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthorizationCodeParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: string, paramarg1: URI): AuthorizationCodeParameters$AuthorizationCodeParametersBuilder;
    private constructor(arg0: string, arg1: URI, arg2: string[], arg3: ClaimsRequest, arg4: string, arg5: { [key: string]: string }, arg6: { [key: string]: string }, arg7: string)
    constructor(arg0: string, arg1: URI, arg2: (Object | null)[], arg3: ClaimsRequest, arg4: string, arg5: Map<Object | null, Object | null>, arg6: Map<Object | null, Object | null>, arg7: string, arg8: AuthorizationCodeParameters$1)
    // private authorizationCode: string;
    // private claims: ClaimsRequest;
    // private codeVerifier: string;
    // private extraHttpHeaders: { [key: string]: string };
    // private extraQueryParameters: { [key: string]: string };
    // private redirectUri: URI;
    // private scopes: string[];
    // private tenant: string;
    authorizationCode(): string;
    claims(): ClaimsRequest;
    codeVerifier(): string;
    extraHttpHeaders(): { [key: string]: string };
    extraQueryParameters(): { [key: string]: string };
    redirectUri(): URI;
    scopes(): string[];
    tenant(): string;
}