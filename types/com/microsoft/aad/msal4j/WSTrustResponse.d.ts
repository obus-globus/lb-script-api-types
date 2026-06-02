import type { Object } from '../../../../java/lang/Object.d.ts'
export class WSTrustResponse extends Object {
    static SAML1_ASSERTION: string;
    private constructor()
    // private errorCode: string;
    // private errorFound: boolean;
    // private faultMessage: string;
    // private token: string;
    // private tokenType: string;
    getErrorCode(): string;
    getFaultMessage(): string;
    getToken(): string;
    getTokenType(): string;
    isErrorFound(): boolean;
    isTokenSaml2(): boolean;
}