import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ITenantProfile } from '../../../../com/microsoft/aad/msal4j/ITenantProfile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TenantProfile extends Object implements ITenantProfile {
    constructor(arg0: JavaMap<string, Object | null>, arg1: string)
    // private environment: string;
    // private idTokenClaims: JavaMap<string, Object | null>;
    environment(): string;
    environment(arg0: string): TenantProfile;
    getClaims(): JavaMap<string, Object | null>;
    idTokenClaims(): JavaMap<string, Object | null>;
    idTokenClaims(arg0: JavaMap<string, Object | null>): TenantProfile;
}