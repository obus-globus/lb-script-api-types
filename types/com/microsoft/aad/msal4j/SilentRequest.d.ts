import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { IUserAssertion } from '../../../../com/microsoft/aad/msal4j/IUserAssertion.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { SilentParameters } from '../../../../com/microsoft/aad/msal4j/SilentParameters.d.ts'
export class SilentRequest extends MsalRequest {
    constructor(arg0: SilentParameters, arg1: AbstractApplicationBase, arg2: RequestContext, arg3: IUserAssertion)
    // private assertion: IUserAssertion;
    // private parameters: SilentParameters;
    // private requestAuthority: Authority;
    assertion(): IUserAssertion;
    parameters(): SilentParameters;
    requestAuthority(): Authority;
}