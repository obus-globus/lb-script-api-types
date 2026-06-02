import type { Codec } from '../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { OverlayMetadataSection$OverlayEntry } from '../../../../net/minecraft/server/packs/OverlayMetadataSection$OverlayEntry.d.ts'
import type { PackType } from '../../../../net/minecraft/server/packs/PackType.d.ts'
import type { MetadataSectionType } from '../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { PackFormat } from '../../../../net/minecraft/server/packs/metadata/pack/PackFormat.d.ts'
export class OverlayMetadataSection extends Record {
    static CLIENT_TYPE: MetadataSectionType<OverlayMetadataSection>;
    static SERVER_TYPE: MetadataSectionType<OverlayMetadataSection>;
    static codecForPackType(parampackType: PackType): Codec<OverlayMetadataSection>;
    static forPackType(parampackType: PackType): MetadataSectionType<OverlayMetadataSection>;
    constructor(overlays: OverlayMetadataSection$OverlayEntry[])
    // private overlays: OverlayMetadataSection$OverlayEntry[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    overlays(): OverlayMetadataSection$OverlayEntry[];
    overlaysForVersion(version: PackFormat): string[];
    toString(): string;
}