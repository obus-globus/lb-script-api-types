import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
export interface PermissionSetSupplier extends Object{
    permissions(): PermissionSet;
}