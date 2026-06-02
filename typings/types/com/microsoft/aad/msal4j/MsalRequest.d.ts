import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { AbstractMsalAuthorizationGrant } from '../../../../com/microsoft/aad/msal4j/AbstractMsalAuthorizationGrant.d.ts'
import type { HttpHeaders } from '../../../../com/microsoft/aad/msal4j/HttpHeaders.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class MsalRequest extends Object {
    constructor(arg0: AbstractApplicationBase, arg1: AbstractMsalAuthorizationGrant, arg2: RequestContext)
    constructor(arg0: AbstractApplicationBase, arg1: RequestContext)
    // private application: AbstractApplicationBase;
    // private headers: HttpHeaders;
    // private msalAuthorizationGrant: AbstractMsalAuthorizationGrant;
    // private requestContext: RequestContext;
    application(): AbstractApplicationBase;
    headers(): HttpHeaders;
    msalAuthorizationGrant(): AbstractMsalAuthorizationGrant;
    requestContext(): RequestContext;
}