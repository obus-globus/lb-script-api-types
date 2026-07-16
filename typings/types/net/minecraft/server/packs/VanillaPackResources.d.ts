import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackLocationInfo } from '../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackResources$ResourceOutput } from '../../../../net/minecraft/server/packs/PackResources$ResourceOutput.d.ts'
import type { PackType } from '../../../../net/minecraft/server/packs/PackType.d.ts'
import type { MetadataSectionType } from '../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { KnownPack } from '../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { IoSupplier } from '../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
import type { Resource } from '../../../../net/minecraft/server/packs/resources/Resource.d.ts'
import type { ResourceMetadata } from '../../../../net/minecraft/server/packs/resources/ResourceMetadata.d.ts'
import type { ResourceProvider } from '../../../../net/minecraft/server/packs/resources/ResourceProvider.d.ts'
export class VanillaPackResources extends Object implements PackResources {
    static METADATA_EXTENSION: string;
    static PACK_META: string;
    constructor(location: PackLocationInfo, metadata: ResourceMetadata, namespaces: string[], rootPaths: Path[], pathsForType: Map<PackType, Path[]>)
    // private builtInMetadata: ResourceMetadata;
    // private location: PackLocationInfo;
    // private namespaces: string[];
    // private pathsForType: Map<PackType, Path[]>;
    // private resourceMetadata: ResourceMetadata;
    // private rootPaths: Path[];
    asProvider(): (param0: Identifier) => Optional<Resource>;
    close(): void;
    getMetadataSection<T extends unknown>(metadataSerializer: MetadataSectionType<T>): T;
    getNamespaces(type: PackType): string[];
    getResource(type: PackType, location: Identifier): () => InputStream;
    getRootResource(...path: string[]): () => InputStream;
    knownPackInfo(): Optional<KnownPack>;
    listRawPaths(type: PackType, resource: Identifier, output: (param0: Path) => void): void;
    listResources(type: PackType, namespace: string, directory: string, output: (param0: Object | null, param1: Object | null) => void): void;
    location(): PackLocationInfo;
    packId(): string;
}