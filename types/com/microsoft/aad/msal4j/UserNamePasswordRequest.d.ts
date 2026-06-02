import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { PublicClientApplication } from '../../../../com/microsoft/aad/msal4j/PublicClientApplication.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { UserNamePasswordParameters } from '../../../../com/microsoft/aad/msal4j/UserNamePasswordParameters.d.ts'
export class UserNamePasswordRequest extends MsalRequest {
    constructor(arg0: UserNamePasswordParameters, arg1: PublicClientApplication, arg2: RequestContext)
}