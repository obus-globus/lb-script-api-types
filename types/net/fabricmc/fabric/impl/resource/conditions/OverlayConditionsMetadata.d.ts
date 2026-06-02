import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { OverlayConditionsMetadata$Entry } from '../../../../../../net/fabricmc/fabric/impl/resource/conditions/OverlayConditionsMetadata$Entry.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
export class OverlayConditionsMetadata extends Record {
    static CODEC: Codec<OverlayConditionsMetadata>;
    static SERIALIZER: MetadataSectionType<OverlayConditionsMetadata>;
    constructor(overlays: OverlayConditionsMetadata$Entry[])
    // private overlays: OverlayConditionsMetadata$Entry[];
    appliedOverlays(): string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    overlays(): OverlayConditionsMetadata$Entry[];
    toString(): string;
}