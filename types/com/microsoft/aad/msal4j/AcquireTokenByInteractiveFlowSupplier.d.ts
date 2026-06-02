import type { AuthenticationResult } from '../../../../com/microsoft/aad/msal4j/AuthenticationResult.d.ts'
import type { AuthenticationResultSupplier } from '../../../../com/microsoft/aad/msal4j/AuthenticationResultSupplier.d.ts'
import type { AuthorizationResponseHandler } from '../../../../com/microsoft/aad/msal4j/AuthorizationResponseHandler.d.ts'
import type { AuthorizationResult } from '../../../../com/microsoft/aad/msal4j/AuthorizationResult.d.ts'
import type { HttpListener } from '../../../../com/microsoft/aad/msal4j/HttpListener.d.ts'
import type { InteractiveRequest } from '../../../../com/microsoft/aad/msal4j/InteractiveRequest.d.ts'
import type { PublicClientApplication } from '../../../../com/microsoft/aad/msal4j/PublicClientApplication.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
export class AcquireTokenByInteractiveFlowSupplier extends AuthenticationResultSupplier {
    static LINUX_OPEN_AS_SUDO_NOT_SUPPORTED: string;
    static LINUX_XDG_OPEN: string;
    constructor(arg0: PublicClientApplication, arg1: InteractiveRequest)
    // private authorizationResultQueue: AuthorizationResult[];
    // private clientApplication: PublicClientApplication;
    // private httpListener: HttpListener;
    // private interactiveRequest: InteractiveRequest;
    // private acquireTokenWithAuthorizationCode(arg0: AuthorizationResult): AuthenticationResult;
    execute(): AuthenticationResult;
    // private getAuthorizationResult(): AuthorizationResult;
    // private getAuthorizationResultFromHttpListener(): AuthorizationResult;
    // private openDefaultSystemBrowser(arg0: URL): void;
    // private startHttpListener(arg0: AuthorizationResponseHandler): void;
    // private updateRedirectUrl(): void;
    // private validateState(arg0: AuthorizationResult): void;
}