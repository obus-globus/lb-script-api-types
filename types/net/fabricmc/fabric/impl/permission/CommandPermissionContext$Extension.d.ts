import type { UUID } from '../../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PermissionContext$Type } from '../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContext$Type.d.ts'
export interface CommandPermissionContext$Extension extends Object{
    fabric_getType(): PermissionContext$Type;
    fabric_getUuid(): UUID;
}