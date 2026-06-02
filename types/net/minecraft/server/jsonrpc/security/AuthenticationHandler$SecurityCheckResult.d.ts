import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AuthenticationHandler$SecurityCheckResult extends Object {
    static allowed(): AuthenticationHandler$SecurityCheckResult;
    static allowed(paramtokenSentInSecWebsocketProtocol: boolean): AuthenticationHandler$SecurityCheckResult;
    static denied(paramreason: string): AuthenticationHandler$SecurityCheckResult;
    private constructor(allowed: boolean, reason: string, tokenSentInSecWebsocketProtocol: boolean)
    readonly allowed: boolean;
    readonly reason: string;
    readonly tokenSentInSecWebsocketProtocol: boolean;
    getReason(): string;
    isAllowed(): boolean;
    isTokenSentInSecWebsocketProtocol(): boolean;
}