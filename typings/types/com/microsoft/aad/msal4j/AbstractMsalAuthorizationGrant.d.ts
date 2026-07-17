import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractMsalAuthorizationGrant extends Object {
    constructor()
    // private claims: ClaimsRequest;
    // private scopes: string[];
    getClaims(): ClaimsRequest;
    getScopes(): string[];
    toParameters(): JavaMap<string, string>;
}