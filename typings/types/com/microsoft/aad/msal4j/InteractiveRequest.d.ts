import type { AuthorizationRequestUrlParameters$Builder } from '../../../../com/microsoft/aad/msal4j/AuthorizationRequestUrlParameters$Builder.d.ts'
import type { IAuthenticationResult } from '../../../../com/microsoft/aad/msal4j/IAuthenticationResult.d.ts'
import type { InteractiveRequestParameters } from '../../../../com/microsoft/aad/msal4j/InteractiveRequestParameters.d.ts'
import type { MsalRequest } from '../../../../com/microsoft/aad/msal4j/MsalRequest.d.ts'
import type { PublicClientApplication } from '../../../../com/microsoft/aad/msal4j/PublicClientApplication.d.ts'
import type { RequestContext } from '../../../../com/microsoft/aad/msal4j/RequestContext.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { AtomicReference } from '../../../../java/util/concurrent/atomic/AtomicReference.d.ts'
export class InteractiveRequest extends MsalRequest {
    constructor(arg0: InteractiveRequestParameters, arg1: AtomicReference<CompletableFuture<IAuthenticationResult>>, arg2: PublicClientApplication, arg3: RequestContext)
    // private authorizationUrl: URL;
    // private futureReference: AtomicReference<CompletableFuture<IAuthenticationResult>>;
    // private interactiveRequestParameters: InteractiveRequestParameters;
    // private publicClientApplication: PublicClientApplication;
    // private state: string;
    // private verifier: string;
    // private addPkceAndState(arg0: AuthorizationRequestUrlParameters$Builder): void;
    authorizationUrl(): URL;
    // private createAuthorizationUrl(): URL;
    futureReference(): AtomicReference<CompletableFuture<IAuthenticationResult>>;
    interactiveRequestParameters(): InteractiveRequestParameters;
    state(): string;
    // private validateRedirectUrl(arg0: URI): void;
    verifier(): string;
}