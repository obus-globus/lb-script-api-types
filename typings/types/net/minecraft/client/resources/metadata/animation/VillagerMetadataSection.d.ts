import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { VillagerMetadataSection$Hat } from '../../../../../../net/minecraft/client/resources/metadata/animation/VillagerMetadataSection$Hat.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class VillagerMetadataSection extends Record {
    static CODEC: Codec<VillagerMetadataSection>;
    static TYPE: MetadataSectionType<VillagerMetadataSection>;
    constructor(hat: VillagerMetadataSection$Hat)
    // private hat: VillagerMetadataSection$Hat;
    equals(o: Object | null): boolean;
    hashCode(): number;
    hat(): VillagerMetadataSection$Hat;
    toString(): string;
}