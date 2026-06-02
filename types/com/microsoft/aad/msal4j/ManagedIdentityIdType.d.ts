import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ManagedIdentityIdType extends Enum<ManagedIdentityIdType> {
    static CLIENT_ID: ManagedIdentityIdType;
    static OBJECT_ID: ManagedIdentityIdType;
    static RESOURCE_ID: ManagedIdentityIdType;
    static SYSTEM_ASSIGNED: ManagedIdentityIdType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ManagedIdentityIdType;
    static values(): (Object | null)[];
    private constructor()
    name(): "SYSTEM_ASSIGNED" | "CLIENT_ID" | "RESOURCE_ID" | "OBJECT_ID";
}