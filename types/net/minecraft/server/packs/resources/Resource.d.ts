import type { BufferedReader } from '../../../../../java/io/BufferedReader.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FabricResource } from '../../../../../net/fabricmc/fabric/api/resource/v1/FabricResource.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { KnownPack } from '../../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { PackSource } from '../../../../../net/minecraft/server/packs/repository/PackSource.d.ts'
import type { IoSupplier } from '../../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
import type { ResourceMetadata } from '../../../../../net/minecraft/server/packs/resources/ResourceMetadata.d.ts'
export class Resource extends Object implements FabricResource {
    constructor(source: PackResources, streamSupplier: () => InputStream)
    constructor(source: PackResources, streamSupplier: () => InputStream, metadataSupplier: () => ResourceMetadata)
    // private cachedMetadata: ResourceMetadata;
    // private metadataSupplier: () => ResourceMetadata;
    // private source: PackResources;
    // private streamSupplier: () => InputStream;
    getFabricPackSource(): PackSource;
    getFabricPackSource(): PackSource;
    knownPackInfo(): Optional<KnownPack>;
    metadata(): ResourceMetadata;
    open(): InputStream;
    openAsReader(): BufferedReader;
    source(): PackResources;
    sourcePackId(): string;
}