import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { MetadataSectionType } from '../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class ImmediatelyFastResourcePackMetadata extends Record {
    static CODEC: Codec<ImmediatelyFastResourcePackMetadata>;
    static DEFAULT: ImmediatelyFastResourcePackMetadata;
    static SERIALIZER: MetadataSectionType<ImmediatelyFastResourcePackMetadata>;
    constructor(compatibleFeatures: string[])
    // private compatibleFeatures: string[];
    compatibleFeatures(): string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}