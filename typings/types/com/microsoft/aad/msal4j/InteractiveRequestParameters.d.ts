import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { IAcquireTokenParameters } from '../../../../com/microsoft/aad/msal4j/IAcquireTokenParameters.d.ts'
import type { InteractiveRequestParameters$InteractiveRequestParametersBuilder } from '../../../../com/microsoft/aad/msal4j/InteractiveRequestParameters$InteractiveRequestParametersBuilder.d.ts'
import type { PopParameters } from '../../../../com/microsoft/aad/msal4j/PopParameters.d.ts'
import type { Prompt } from '../../../../com/microsoft/aad/msal4j/Prompt.d.ts'
import type { SystemBrowserOptions } from '../../../../com/microsoft/aad/msal4j/SystemBrowserOptions.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InteractiveRequestParameters extends Object implements IAcquireTokenParameters {
    static builder(paramarg0: URI): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    private constructor(arg0: URI, arg1: ClaimsRequest, arg2: string[], arg3: Prompt, arg4: string, arg5: string, arg6: SystemBrowserOptions, arg7: string, arg8: JavaMap<string, string>, arg9: JavaMap<string, string>, arg10: string, arg11: number, arg12: boolean, arg13: number, arg14: PopParameters)
    // private claims: ClaimsRequest;
    // private claimsChallenge: string;
    // private domainHint: string;
    // private extraHttpHeaders: JavaMap<string, string>;
    // private extraQueryParameters: JavaMap<string, string>;
    // private httpPollingTimeoutInSeconds: number;
    // private instanceAware: boolean;
    // private loginHint: string;
    // private prompt: Prompt;
    // private proofOfPossession: PopParameters;
    // private redirectUri: URI;
    // private scopes: string[];
    // private systemBrowserOptions: SystemBrowserOptions;
    // private tenant: string;
    // private windowHandle: number;
    claims(): ClaimsRequest;
    claimsChallenge(): string;
    domainHint(): string;
    extraHttpHeaders(): JavaMap<string, string>;
    extraQueryParameters(): JavaMap<string, string>;
    httpPollingTimeoutInSeconds(): number;
    instanceAware(): boolean;
    loginHint(): string;
    prompt(): Prompt;
    proofOfPossession(): PopParameters;
    redirectUri(): URI;
    redirectUri(arg0: URI): void;
    scopes(): string[];
    systemBrowserOptions(): SystemBrowserOptions;
    tenant(): string;
    windowHandle(): number;
}