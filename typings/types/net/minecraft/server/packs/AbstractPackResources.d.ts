import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PackLocationInfo } from '../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackResources$ResourceOutput } from '../../../../net/minecraft/server/packs/PackResources$ResourceOutput.d.ts'
import type { PackType } from '../../../../net/minecraft/server/packs/PackType.d.ts'
import type { MetadataSectionType } from '../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { KnownPack } from '../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { ResourceMetadata } from '../../../../net/minecraft/server/packs/resources/ResourceMetadata.d.ts'
export abstract class AbstractPackResources extends Object implements PackResources {
    static METADATA_EXTENSION: string;
    static PACK_META: string;
    static loadMetadata(parampackResources: PackResources): ResourceMetadata;
    constructor(location: PackLocationInfo)
    // private location: PackLocationInfo;
    // private metadata: ResourceMetadata;
    close(): void;
    getMetadataSection<T extends Object | number | string | boolean>(metadataSerializer: MetadataSectionType<T>): T;
    knownPackInfo(): Optional<KnownPack>;
    listResources(type: PackType, namespace: string, directory: string, output: (param0: Object | null, param1: Object | null) => void): void;
    location(): PackLocationInfo;
    packId(): string;
}