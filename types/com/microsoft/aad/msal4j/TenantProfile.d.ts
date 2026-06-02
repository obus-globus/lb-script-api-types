import type { ITenantProfile } from '../../../../com/microsoft/aad/msal4j/ITenantProfile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TenantProfile extends Object implements ITenantProfile {
    constructor(arg0: { [key: string]: Object | null }, arg1: string)
    // private environment: string;
    // private idTokenClaims: { [key: string]: Object | null };
    environment(): string;
    environment(arg0: string): TenantProfile;
    getClaims(): { [key: string]: Object | null };
    idTokenClaims(): { [key: string]: Object | null };
    idTokenClaims(arg0: { [key: string]: Object | null }): TenantProfile;
}