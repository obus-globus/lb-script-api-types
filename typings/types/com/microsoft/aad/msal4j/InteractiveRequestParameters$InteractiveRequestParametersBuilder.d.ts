import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { HttpMethod } from '../../../../com/microsoft/aad/msal4j/HttpMethod.d.ts'
import type { InteractiveRequestParameters } from '../../../../com/microsoft/aad/msal4j/InteractiveRequestParameters.d.ts'
import type { PopParameters } from '../../../../com/microsoft/aad/msal4j/PopParameters.d.ts'
import type { Prompt } from '../../../../com/microsoft/aad/msal4j/Prompt.d.ts'
import type { SystemBrowserOptions } from '../../../../com/microsoft/aad/msal4j/SystemBrowserOptions.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class InteractiveRequestParameters$InteractiveRequestParametersBuilder extends Object {
    constructor()
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
    build(): InteractiveRequestParameters;
    claims(arg0: ClaimsRequest): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    claimsChallenge(arg0: string): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    domainHint(arg0: string): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    extraHttpHeaders(arg0: JavaMap<string, string>): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    extraQueryParameters(arg0: JavaMap<string, string>): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    httpPollingTimeoutInSeconds(arg0: number): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    instanceAware(arg0: boolean): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    loginHint(arg0: string): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    prompt(arg0: Prompt): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    proofOfPossession(arg0: HttpMethod, arg1: URI, arg2: string): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    redirectUri(arg0: URI): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    scopes(arg0: string[]): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    systemBrowserOptions(arg0: SystemBrowserOptions): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    tenant(arg0: string): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
    toString(): string;
    windowHandle(arg0: number): InteractiveRequestParameters$InteractiveRequestParametersBuilder;
}