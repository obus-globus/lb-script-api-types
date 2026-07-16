import type { Predicate } from '../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { PermissionContextOwner } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionContextOwner.d.ts'
import type { PermissionNode } from '../../../../../../net/fabricmc/fabric/api/permission/v1/PermissionNode.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PermissionLevel } from '../../../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
export class PermissionPredicates extends Object {
    static require<T extends PermissionContextOwner>(paramarg0: PermissionNode<boolean>): (param0: T) => boolean;
    static require<T extends PermissionContextOwner>(paramarg0: PermissionNode<boolean>, paramarg1: boolean): (param0: T) => boolean;
    static require<T extends PermissionContextOwner>(paramarg0: PermissionNode<boolean>, paramarg1: PermissionLevel): (param0: T) => boolean;
    static require<T extends PermissionContextOwner>(paramarg0: Identifier): (param0: T) => boolean;
    static require<T extends PermissionContextOwner>(paramarg0: Identifier, paramarg1: boolean): (param0: T) => boolean;
    static require<T extends PermissionContextOwner>(paramarg0: Identifier, paramarg1: PermissionLevel): (param0: T) => boolean;
    private constructor()
}