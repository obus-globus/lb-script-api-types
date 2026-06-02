import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GuiSpriteScaling } from '../../../../../../net/minecraft/client/resources/metadata/gui/GuiSpriteScaling.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class GuiMetadataSection extends Record {
    static CODEC: Codec<GuiMetadataSection>;
    static DEFAULT: GuiMetadataSection;
    static TYPE: MetadataSectionType<GuiMetadataSection>;
    constructor(scaling: GuiSpriteScaling)
    // private scaling: GuiSpriteScaling;
    equals(o: Object | null): boolean;
    hashCode(): number;
    scaling(): GuiSpriteScaling;
    toString(): string;
}