import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Permission } from '../../../../net/minecraft/server/permissions/Permission.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
export class PermissionSetUnion extends Object implements PermissionSet {
    static ALL_PERMISSIONS: PermissionSet;
    static NO_PERMISSIONS: PermissionSet;
    private constructor(oldPermissions: PermissionSet[], other: PermissionSet[])
    private constructor(oldPermissions: PermissionSet[], other: PermissionSet)
    constructor(first: PermissionSet, second: PermissionSet)
    readonly permissions: PermissionSet[];
    // private ensureNoUnionsWithinUnions(): void;
    getPermissions(): PermissionSet[];
    hasPermission(permission: Permission): boolean;
    union(other: PermissionSet): PermissionSet;
    union(other: PermissionSet): PermissionSet;
}