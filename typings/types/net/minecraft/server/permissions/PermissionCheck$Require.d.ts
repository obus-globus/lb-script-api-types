import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Permission } from '../../../../net/minecraft/server/permissions/Permission.d.ts'
import type { PermissionCheck } from '../../../../net/minecraft/server/permissions/PermissionCheck.d.ts'
import type { PermissionSet } from '../../../../net/minecraft/server/permissions/PermissionSet.d.ts'
export class PermissionCheck$Require extends Record implements PermissionCheck {
    static CODEC: Codec<PermissionCheck>;
    static MAP_CODEC: MapCodec<PermissionCheck$Require>;
    constructor(permission: Permission)
    // private permission: Permission;
    check(source: PermissionSet): boolean;
    codec(): MapCodec<PermissionCheck$Require>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    permission(): Permission;
    toString(): string;
}