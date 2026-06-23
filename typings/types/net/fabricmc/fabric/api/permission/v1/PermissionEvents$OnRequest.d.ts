import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PermissionContext } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext.d.ts'
import type { PermissionNode } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionNode.d.ts'
export interface PermissionEvents$OnRequest extends Object{
    handlePermissionRequest<T extends unknown>(arg0: PermissionContext, arg1: PermissionNode<T>): T;
}