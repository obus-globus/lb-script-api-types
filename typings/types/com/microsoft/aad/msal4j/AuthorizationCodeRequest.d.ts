import type { AbstractClientApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractClientApplicationBase.d.ts'
import type { AuthorizationCodeParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationCodeParameters.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
export class AuthorizationCodeRequest extends MsalRequest {
    constructor(arg0: AuthorizationCodeParameters, arg1: AbstractClientApplicationBase, arg2: RequestContext)
}