import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Serializable } from '../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ITenantProfile extends Serializable, Object{
    environment(): string;
    getClaims(): JavaMap<string, Object | null>;
}