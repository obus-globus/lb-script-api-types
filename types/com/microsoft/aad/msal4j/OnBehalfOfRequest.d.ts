import type { ConfidentialClientApplication } from '../../../../com/microsoft/aad/msal4j/ConfidentialClientApplication.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { OnBehalfOfParameters } from '../../../../com/microsoft/aad/msal4j/OnBehalfOfParameters.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
export class OnBehalfOfRequest extends MsalRequest {
    constructor(arg0: OnBehalfOfParameters, arg1: ConfidentialClientApplication, arg2: RequestContext)
    // private parameters: OnBehalfOfParameters;
    parameters(): OnBehalfOfParameters;
}