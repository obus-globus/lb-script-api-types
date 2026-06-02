import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Permission } from '../../../../net/minecraft/server/permissions/Permission.d.ts'
import type { PermissionLevel } from '../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
export interface LevelBasedPermissionSet extends Object, PermissionSet{
    hasPermission(permission: Permission): boolean;
    level(): PermissionLevel;
    union(other: PermissionSet): PermissionSet;
    union(other: PermissionSet): PermissionSet;
}