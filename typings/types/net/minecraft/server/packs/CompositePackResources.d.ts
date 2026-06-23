import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackLocationInfo } from '../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackResources$ResourceOutput } from '../../../../net/minecraft/server/packs/PackResources$ResourceOutput.d.ts'
import type { PackType } from '../../../../net/minecraft/server/packs/PackType.d.ts'
import type { MetadataSectionType } from '../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { KnownPack } from '../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { IoSupplier } from '../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
export class CompositePackResources extends Object implements PackResources {
    static METADATA_EXTENSION: string;
    static PACK_META: string;
    constructor(primaryPackResources: PackResources, overlayPackResources: PackResources[])
    // private packResourcesStack: PackResources[];
    // private primaryPackResources: PackResources;
    close(): void;
    getMetadataSection<T extends unknown>(metadataSerializer: MetadataSectionType<T>): T;
    getNamespaces(type: PackType): string[];
    getResource(type: PackType, location: Identifier): () => InputStream;
    getRootResource(path: string[]): () => InputStream;
    knownPackInfo(): Optional<KnownPack>;
    listResources(type: PackType, namespace: string, directory: string, output: (param0: Object | null, param1: Object | null) => void): void;
    location(): PackLocationInfo;
    packId(): string;
}