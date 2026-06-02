import type { Object } from '../../../../java/lang/Object.d.ts'
export class TokenProviderResult extends Object {
    constructor()
    readonly accessToken: string;
    readonly expiresInSeconds: number;
    readonly refreshInSeconds: number;
    readonly tenantId: string;
    getAccessToken(): string;
    getExpiresInSeconds(): number;
    getRefreshInSeconds(): number;
    getTenantId(): string;
    setAccessToken(arg0: string): void;
    setExpiresInSeconds(arg0: number): void;
    setRefreshInSeconds(arg0: number): void;
    setTenantId(arg0: string): void;
}