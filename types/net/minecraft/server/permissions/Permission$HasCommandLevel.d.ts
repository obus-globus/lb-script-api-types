import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Permission } from '../../../../net/minecraft/server/permissions/Permission.d.ts'
import type { PermissionLevel } from '../../../../net/minecraft/server/permissions/PermissionLevel.d.ts'
export class Permission$HasCommandLevel extends Record implements Permission {
    static CODEC: Codec<Permission>;
    static FULL_CODEC: Codec<Permission>;
    static MAP_CODEC: MapCodec<Permission$HasCommandLevel>;
    constructor(level: PermissionLevel)
    // private level: PermissionLevel;
    codec(): MapCodec<Permission$HasCommandLevel>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    level(): PermissionLevel;
    toString(): string;
}