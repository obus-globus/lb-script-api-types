import type { AbstractApplicationBase } from '../../../../com/microsoft/aad/msal4j/AbstractApplicationBase.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { RefreshTokenParameters } from '../../../../com/microsoft/aad/msal4j/RefreshTokenParameters.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { SilentRequest } from '../../../../com/microsoft/aad/msal4j/SilentRequest.d.ts'
export class RefreshTokenRequest extends MsalRequest {
    constructor(arg0: RefreshTokenParameters, arg1: AbstractApplicationBase, arg2: RequestContext)
    constructor(arg0: RefreshTokenParameters, arg1: AbstractApplicationBase, arg2: RequestContext, arg3: SilentRequest)
    // private parameters: RefreshTokenParameters;
    // private parentSilentRequest: SilentRequest;
    getFullThumbprint(): string;
}