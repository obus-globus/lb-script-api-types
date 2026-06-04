import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { MutablePermissionContext } from '../../../../../../net/fabricmc/fabric/api/permission/v1/MutablePermissionContext.d.ts'
import type { PermissionContext$Key } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Key.d.ts'
import type { PermissionContext$Type } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Type.d.ts'
import type { PermissionContextOwner } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContextOwner.d.ts'
import type { PermissionNode } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionNode.d.ts'
import type { TriState } from '../../../../../../net/fabricmc/fabric/api/util/TriState.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PermissionLevel } from '../../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
export interface PermissionContext extends Object, PermissionContextOwner{
    checkPermission<T extends Object | number | string | boolean>(arg0: PermissionNode<T>): T;
    checkPermission<T extends Object | number | string | boolean>(arg0: PermissionNode<T>, arg1: T): T;
    checkPermission(arg0: Identifier): TriState;
    checkPermission(arg0: Identifier, arg1: boolean): boolean;
    checkPermission(arg0: Identifier, arg1: PermissionLevel): boolean;
    get<T extends Object | number | string | boolean>(arg0: PermissionContext$Key<T>): T;
    getPermissionContext(): PermissionContext;
    keys(): PermissionContext$Key<Object>[];
    mutable(): MutablePermissionContext;
    orElse<T extends Object | number | string | boolean>(arg0: PermissionContext$Key<T>, arg1: T): T;
    permissionLevel(): PermissionLevel;
    type(): PermissionContext$Type;
    uuid(): UUID;
}