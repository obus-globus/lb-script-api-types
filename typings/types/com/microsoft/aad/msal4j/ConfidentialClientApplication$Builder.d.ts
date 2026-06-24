import type { ConfidentialClientApplication$1 } from '../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { AbstractClientApplicationBase$Builder } from '../../../../com/microsoft/aad/msal4j/AbstractClientApplicationBase$Builder.d.ts'
import type { AppTokenProviderParameters } from '../../../../com/microsoft/aad/msal4j/AppTokenProviderParameters.d.ts'
import type { ConfidentialClientApplication } from '../../../../com/microsoft/aad/msal4j/ConfidentialClientApplication.d.ts'
import type { IClientCredential } from '../../../../com/microsoft/aad/msal4j/IClientCredential.d.ts'
import type { TokenProviderResult } from '../../../../com/microsoft/aad/msal4j/TokenProviderResult.d.ts'
import type { CompletableFuture } from '../../../../java/util/concurrent/CompletableFuture.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
export class ConfidentialClientApplication$Builder extends AbstractClientApplicationBase$Builder<ConfidentialClientApplication$Builder> {
    private constructor(arg0: string, arg1: IClientCredential)
    constructor(arg0: string, arg1: IClientCredential, arg2: ConfidentialClientApplication$1)
    // private appTokenProvider: (param0: AppTokenProviderParameters) => CompletableFuture<TokenProviderResult>;
    // private clientCredential: IClientCredential;
    // private sendX5c: boolean;
    appTokenProvider(arg0: (param0: AppTokenProviderParameters) => CompletableFuture<TokenProviderResult>): ConfidentialClientApplication$Builder;
    build(): ConfidentialClientApplication;
    self(): ConfidentialClientApplication$Builder;
    sendX5c(arg0: boolean): ConfidentialClientApplication$Builder;
}