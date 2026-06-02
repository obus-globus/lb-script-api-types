import type { Property } from '../../../../com/mojang/authlib/properties/Property.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { UUID } from '../../../../java/util/UUID.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SkinManager$CacheKey extends Record {
    private constructor(profileId: UUID, packedTextures: Property)
    // private packedTextures: Property;
    // private profileId: UUID;
    equals(o: Object | null): boolean;
    hashCode(): number;
    packedTextures(): Property;
    profileId(): UUID;
    toString(): string;
}