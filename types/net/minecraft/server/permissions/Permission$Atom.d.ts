import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { MapCodec } from '../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { Permission } from '../../../../net/minecraft/server/permissions/Permission.d.ts'
export class Permission$Atom extends Record implements Permission {
    static CODEC: Codec<Permission>;
    static FULL_CODEC: Codec<Permission>;
    static MAP_CODEC: MapCodec<Permission$Atom>;
    static create(paramname: string): Permission$Atom;
    static create(paramid: Identifier): Permission$Atom;
    constructor(id: Identifier)
    // private id: Identifier;
    codec(): MapCodec<Permission$Atom>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    id(): Identifier;
    toString(): string;
}