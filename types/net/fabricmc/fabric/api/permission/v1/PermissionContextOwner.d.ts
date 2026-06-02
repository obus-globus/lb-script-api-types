import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PermissionContext } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { PermissionNode } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionNode.d.ts'
import type { TriState } from '../../../../../../net/fabricmc/fabric/api/util/TriState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PermissionLevel } from '../../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
export interface PermissionContextOwner extends Object{
    checkPermission<T extends Object | number | string | boolean>(arg0: PermissionNode<T>): T;
    checkPermission<T extends Object | number | string | boolean>(arg0: PermissionNode<T>, arg1: T): T;
    checkPermission(arg0: Identifier): TriState;
    checkPermission(arg0: Identifier, arg1: boolean): boolean;
    checkPermission(arg0: Identifier, arg1: PermissionLevel): boolean;
    getPermissionContext(): PermissionContext;
}