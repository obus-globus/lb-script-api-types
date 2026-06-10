import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Permission } from '../../../../net/minecraft/server/permissions/Permission.d.ts'
export class PermissionTypes extends Object {
    static bootstrap(paramregistry: MapCodec<Permission>[]): MapCodec<Permission>;
    constructor()
}