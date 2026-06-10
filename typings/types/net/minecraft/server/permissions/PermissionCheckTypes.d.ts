import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PermissionCheck } from '../../../../net/minecraft/server/permissions/PermissionCheck.d.ts'
export class PermissionCheckTypes extends Object {
    static bootstrap(paramregistry: MapCodec<PermissionCheck>[]): MapCodec<PermissionCheck>;
    constructor()
}