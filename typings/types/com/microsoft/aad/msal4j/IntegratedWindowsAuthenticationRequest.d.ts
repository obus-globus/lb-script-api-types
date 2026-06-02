import type { IntegratedWindowsAuthenticationParameters } from '../../../../com/microsoft/aad/msal4j/IntegratedWindowsAuthenticationParameters.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { PublicClientApplication } from '../../../../com/microsoft/aad/msal4j/PublicClientApplication.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
export class IntegratedWindowsAuthenticationRequest extends MsalRequest {
    constructor(arg0: IntegratedWindowsAuthenticationParameters, arg1: PublicClientApplication, arg2: RequestContext)
}