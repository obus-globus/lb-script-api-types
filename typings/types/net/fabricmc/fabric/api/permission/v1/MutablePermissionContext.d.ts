import type { UUID } from '../../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PermissionContext } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { PermissionContext$Key } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Key.d.ts'
import type { PermissionContext$Type } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Type.d.ts'
import type { PermissionLevel } from '../../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
export interface MutablePermissionContext extends Object, PermissionContext{
    getPermissionContext(): PermissionContext;
    mutable(): MutablePermissionContext;
    orElse<T extends unknown>(arg0: PermissionContext$Key<T>, arg1: T): T;
    permissionLevel(): PermissionLevel;
    set<T extends unknown>(arg0: PermissionContext$Key<T>, arg1: T): MutablePermissionContext;
    type(): PermissionContext$Type;
    uuid(): UUID;
}