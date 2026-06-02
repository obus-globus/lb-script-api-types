import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { PackType } from '../../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { PackFormat } from '../../../../../../net/minecraft/server/packs/metadata/pack/PackFormat.d.ts'
import type { InclusiveRange } from '../../../../../../net/minecraft/util/InclusiveRange.d.ts'
export class PackMetadataSection extends Record {
    static CLIENT_TYPE: MetadataSectionType<PackMetadataSection>;
    static FALLBACK_TYPE: MetadataSectionType<PackMetadataSection>;
    static SERVER_TYPE: MetadataSectionType<PackMetadataSection>;
    static codecForPackType(parampackType: PackType): Codec<PackMetadataSection>;
    static forPackType(parampackType: PackType): MetadataSectionType<PackMetadataSection>;
    constructor(description: Component, supportedFormats: InclusiveRange<PackFormat>)
    // private description: Component;
    // private supportedFormats: InclusiveRange<PackFormat>;
    description(): Component;
    equals(o: Object | null): boolean;
    hashCode(): number;
    supportedFormats(): InclusiveRange<PackFormat>;
    toString(): string;
}