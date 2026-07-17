import type { Authority } from '../../../../com/microsoft/aad/msal4j/Authority.d.ts'
import type { AuthorizationRequestUrlParameters$Builder } from '../../../../com/microsoft/aad/msal4j/AuthorizationRequestUrlParameters$Builder.d.ts'
import type { Prompt } from '../../../../com/microsoft/aad/msal4j/Prompt.d.ts'
import type { ResponseMode } from '../../../../com/microsoft/aad/msal4j/ResponseMode.d.ts'
import type { URL } from '../../../../java/net/URL.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Logger } from '../../../../org/slf4j/Logger.d.ts'
export class AuthorizationRequestUrlParameters extends Object {
    static builder(paramarg0: string, paramarg1: string[]): AuthorizationRequestUrlParameters$Builder;
    private constructor(arg0: AuthorizationRequestUrlParameters$Builder)
    // private codeChallenge: string;
    // private codeChallengeMethod: string;
    // private correlationId: string;
    // private domainHint: string;
    // private extraQueryParameters: { [key: string]: string };
    // private instanceAware: boolean;
    // private loginHint: string;
    // private nonce: string;
    // private prompt: Prompt;
    // private redirectUri: string;
    // private requestParameters: { [key: string]: string };
    // private responseMode: ResponseMode;
    // private scopes: string[];
    // private state: string;
    codeChallenge(): string;
    codeChallengeMethod(): string;
    correlationId(): string;
    createAuthorizationURL(arg0: Authority, arg1: { [key: string]: string }): URL;
    domainHint(): string;
    extraQueryParameters(): { [key: string]: string };
    instanceAware(): boolean;
    log(): Logger;
    loginHint(): string;
    nonce(): string;
    prompt(): Prompt;
    redirectUri(): string;
    requestParameters(): { [key: string]: string[] };
    responseMode(): ResponseMode;
    scopes(): string[];
    state(): string;
}