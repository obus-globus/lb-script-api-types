import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Permission } from '../../../../net/minecraft/server/permissions/Permission.d.ts'
export interface PermissionSet extends Object{
    hasPermission(permission: Permission): boolean;
    union(other: PermissionSet): PermissionSet;
}