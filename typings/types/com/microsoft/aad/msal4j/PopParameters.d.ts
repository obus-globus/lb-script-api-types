import type { HttpMethod } from '../../../../com/microsoft/aad/msal4j/HttpMethod.d.ts'
import type { URI } from '../../../../java/net/URI.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PopParameters extends Object {
    constructor(arg0: HttpMethod, arg1: URI, arg2: string)
    httpMethod: HttpMethod;
    nonce: string;
    uri: URI;
    getHttpMethod(): HttpMethod;
    getNonce(): string;
    getUri(): URI;
    validatePopAuthScheme(arg0: HttpMethod, arg1: URI): void;
}