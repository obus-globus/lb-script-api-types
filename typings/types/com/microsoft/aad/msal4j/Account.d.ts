import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { IAccount } from '../../../../com/microsoft/aad/msal4j/IAccount.d.ts'
import type { ITenantProfile } from '../../../../com/microsoft/aad/msal4j/ITenantProfile.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Account extends Object implements IAccount {
    constructor(arg0: string, arg1: string, arg2: string, arg3: JavaMap<string, ITenantProfile>)
    // private environment: string;
    // private homeAccountId: string;
    tenantProfiles: JavaMap<string, ITenantProfile>;
    // private username: string;
    environment(): string;
    equals(arg0: Object | null): boolean;
    getTenantProfiles(): JavaMap<string, ITenantProfile>;
    hashCode(): number;
    homeAccountId(): string;
    username(): string;
    username(arg0: string): void;
}