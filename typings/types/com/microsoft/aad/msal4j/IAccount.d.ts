import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { ITenantProfile } from '../../../../com/microsoft/aad/msal4j/ITenantProfile.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IAccount extends Serializable, Object{
    environment(): string;
    getTenantProfiles(): JavaMap<string, ITenantProfile>;
    homeAccountId(): string;
    username(): string;
}