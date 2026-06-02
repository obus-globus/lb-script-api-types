import type { DeviceCode } from '../../../../com/microsoft/aad/msal4j/DeviceCode.d.ts'
import type { DeviceCodeFlowParameters } from '../../../../com/microsoft/aad/msal4j/DeviceCodeFlowParameters.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { PublicClientApplication } from '../../../../com/microsoft/aad/msal4j/PublicClientApplication.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { ServiceBundle } from '../../../../com/microsoft/aad/msal4j/ServiceBundle.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
export class DeviceCodeFlowRequest extends MsalRequest {
    constructor(arg0: DeviceCodeFlowParameters, arg1: AtomicReference<CompletableFuture<IAuthenticationResult>>, arg2: PublicClientApplication, arg3: RequestContext)
    // private futureReference: AtomicReference<CompletableFuture<IAuthenticationResult>>;
    // private parameters: DeviceCodeFlowParameters;
    // private scopesStr: string;
    acquireDeviceCode(arg0: string, arg1: string, arg2: { [key: string]: string }, arg3: ServiceBundle): DeviceCode;
    // private appendToHeaders(arg0: { [key: string]: string }): { [key: string]: string };
    createAuthenticationGrant(arg0: DeviceCode): void;
    // private createQueryParams(arg0: string): string;
    futureReference(): AtomicReference<CompletableFuture<IAuthenticationResult>>;
    parameters(): DeviceCodeFlowParameters;
    // private parseJsonToDeviceCodeAndSetParameters(arg0: string, arg1: { [key: string]: string }, arg2: string): DeviceCode;
    scopesStr(): string;
}