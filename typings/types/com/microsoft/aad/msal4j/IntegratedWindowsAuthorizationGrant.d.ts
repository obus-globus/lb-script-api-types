import type { AbstractMsalAuthorizationGrant } from '../../../../com/microsoft/aad/msal4j/AbstractMsalAuthorizationGrant.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
export class IntegratedWindowsAuthorizationGrant extends AbstractMsalAuthorizationGrant {
    constructor(arg0: string[], arg1: string, arg2: ClaimsRequest)
    // private userName: string;
    getUserName(): string;
    toParameters(): { [key: string]: string };
}