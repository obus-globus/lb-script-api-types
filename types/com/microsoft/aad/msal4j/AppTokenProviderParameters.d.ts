import type { Object } from '../../../../java/lang/Object.d.ts'
export class AppTokenProviderParameters extends Object {
    constructor(arg0: string[], arg1: string, arg2: string, arg3: string)
    claims: string;
    correlationId: string;
    scopes: string[];
    tenantId: string;
    getClaims(): string;
    getCorrelationId(): string;
    getScopes(): string[];
    getTenantId(): string;
    setClaims(arg0: string): void;
    setCorrelationId(arg0: string): void;
    setScopes(arg0: string[]): void;
    setTenantId(arg0: string): void;
}