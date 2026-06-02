import type { AuthorizationRequestUrlParameters } from '../../../../com/microsoft/aad/msal4j/AuthorizationRequestUrlParameters.d.ts'
import type { ClaimsRequest } from '../../../../com/microsoft/aad/msal4j/ClaimsRequest.d.ts'
import type { Prompt } from '../../../../com/microsoft/aad/msal4j/Prompt.d.ts'
import type { ResponseMode } from '../../../../com/microsoft/aad/msal4j/ResponseMode.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class AuthorizationRequestUrlParameters$Builder extends Object {
    constructor()
    // private claims: string[];
    // private claimsChallenge: string;
    // private claimsRequest: ClaimsRequest;
    // private codeChallenge: string;
    // private codeChallengeMethod: string;
    // private correlationId: string;
    // private domainHint: string;
    // private extraQueryParameters: { [key: string]: string };
    // private extraScopesToConsent: string[];
    // private instanceAware: boolean;
    // private loginHint: string;
    // private nonce: string;
    // private prompt: Prompt;
    // private redirectUri: string;
    // private responseMode: ResponseMode;
    // private scopes: string[];
    // private state: string;
    build(): AuthorizationRequestUrlParameters;
    claims(arg0: ClaimsRequest): AuthorizationRequestUrlParameters$Builder;
    claimsChallenge(arg0: string): AuthorizationRequestUrlParameters$Builder;
    codeChallenge(arg0: string): AuthorizationRequestUrlParameters$Builder;
    codeChallengeMethod(arg0: string): AuthorizationRequestUrlParameters$Builder;
    correlationId(arg0: string): AuthorizationRequestUrlParameters$Builder;
    domainHint(arg0: string): AuthorizationRequestUrlParameters$Builder;
    extraQueryParameters(arg0: { [key: string]: string }): AuthorizationRequestUrlParameters$Builder;
    extraScopesToConsent(arg0: string[]): AuthorizationRequestUrlParameters$Builder;
    instanceAware(arg0: boolean): AuthorizationRequestUrlParameters$Builder;
    loginHint(arg0: string): AuthorizationRequestUrlParameters$Builder;
    nonce(arg0: string): AuthorizationRequestUrlParameters$Builder;
    prompt(arg0: Prompt): AuthorizationRequestUrlParameters$Builder;
    redirectUri(arg0: string): AuthorizationRequestUrlParameters$Builder;
    responseMode(arg0: ResponseMode): AuthorizationRequestUrlParameters$Builder;
    scopes(arg0: string[]): AuthorizationRequestUrlParameters$Builder;
    // private self(): AuthorizationRequestUrlParameters$Builder;
    state(arg0: string): AuthorizationRequestUrlParameters$Builder;
}