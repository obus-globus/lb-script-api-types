import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultSupplier } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultSupplier.d.ts'
import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { DeviceCode } from '../../../../com/microsoft/aad/msal4j/DeviceCode.d.ts'
import type { DeviceCodeFlowRequest } from '../../../../com/microsoft/aad/msal4j/DeviceCodeFlowRequest.d.ts'
import type { PublicClientApplication } from '../../../../com/microsoft/aad/msal4j/PublicClientApplication.d.ts'
export class AcquireTokenByDeviceCodeFlowSupplier extends AuthenticationResultSupplier {
    constructor(arg0: PublicClientApplication, arg1: DeviceCodeFlowRequest)
    // private deviceCodeFlowRequest: DeviceCodeFlowRequest;
    // private acquireTokenWithDeviceCode(arg0: DeviceCode, arg1: Authority): AuthenticationResult;
    execute(): AuthenticationResult;
    // private getCurrentSystemTimeInSeconds(): number;
    // private getDeviceCode(arg0: Authority): DeviceCode;
}