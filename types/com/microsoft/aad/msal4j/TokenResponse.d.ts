import type { Object } from '../../../../java/lang/Object.d.ts'
export class TokenResponse extends Object {
    constructor(arg0: { [key: string]: string })
    // private accessToken: string;
    // private clientInfo: string;
    // private expiresIn: number;
    // private extExpiresIn: number;
    // private foci: string;
    // private idToken: string;
    // private refreshIn: number;
    // private refreshToken: string;
    // private scope: string;
    accessToken(): string;
    getClientInfo(): string;
    getExpiresIn(): number;
    getExtExpiresIn(): number;
    getFoci(): string;
    getRefreshIn(): number;
    getScope(): string;
    idToken(): string;
    refreshToken(): string;
}