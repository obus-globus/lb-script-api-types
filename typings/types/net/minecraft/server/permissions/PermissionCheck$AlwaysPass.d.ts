import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PermissionCheck } from '../../../../net/minecraft/server/permissions/PermissionCheck.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
export class PermissionCheck$AlwaysPass extends Object implements PermissionCheck {
    static CODEC: Codec<PermissionCheck>;
    static INSTANCE: PermissionCheck$AlwaysPass;
    static MAP_CODEC: MapCodec<PermissionCheck$AlwaysPass>;
    private constructor()
    check(source: PermissionSet): boolean;
    codec(): MapCodec<PermissionCheck$AlwaysPass>;
}