import type { ManagedIdentityIdType } from '../../../../com/microsoft/aad/msal4j/ManagedIdentityIdType.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ManagedIdentityId extends Object {
    static systemAssigned(): ManagedIdentityId;
    static userAssignedClientId(paramarg0: string): ManagedIdentityId;
    static userAssignedObjectId(paramarg0: string): ManagedIdentityId;
    static userAssignedResourceId(paramarg0: string): ManagedIdentityId;
    private constructor(arg0: ManagedIdentityIdType)
    private constructor(arg0: ManagedIdentityIdType, arg1: string)
    readonly idType: ManagedIdentityIdType;
    readonly userAssignedId: string;
    getIdType(): ManagedIdentityIdType;
    getUserAssignedId(): string;
}