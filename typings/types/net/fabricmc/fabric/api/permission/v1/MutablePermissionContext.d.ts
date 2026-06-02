import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PermissionContext } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { PermissionContext$Key } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Key.d.ts'
export interface MutablePermissionContext extends Object, PermissionContext{
    getPermissionContext(): PermissionContext;
    mutable(): MutablePermissionContext;
    orElse<T extends Object | number | string | boolean>(arg0: PermissionContext$Key<T>, arg1: T): T;
    set<T extends Object | number | string | boolean>(arg0: PermissionContext$Key<T>, arg1: T): MutablePermissionContext;
}