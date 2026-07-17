import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { AbstractMsalAuthorizationGrant } from '../../../../com/microsoft/aad/msal4j/AbstractMsalAuthorizationGrant.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
export class OAuthAuthorizationGrant extends AbstractMsalAuthorizationGrant {
    constructor(arg0: JavaMap<string, string>, arg1: string[])
    constructor(arg0: JavaMap<string, string>, arg1: string[], arg2: ClaimsRequest)
    // private params: JavaMap<string, string>;
    addAndReplaceParams(arg0: JavaMap<string, string>): void;
    getParamValue(arg0: string): string;
    toParameters(): JavaMap<string, string>;
}