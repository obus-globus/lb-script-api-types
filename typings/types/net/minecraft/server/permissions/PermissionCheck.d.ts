import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
export interface PermissionCheck extends Object{
    check(source: PermissionSet): boolean;
    codec(): MapCodec<PermissionCheck>;
}