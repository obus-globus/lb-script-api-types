import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { InputStream } from '../../../../../../java/io/InputStream.d.ts'
import type { Path } from '../../../../../../java/nio/file/Path.d.ts'
import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModPackResources } from '../../../../../../net/fabricmc/fabric/api/resource/v1/pack/ModPackResources.d.ts'
import type { PackActivationType } from '../../../../../../net/fabricmc/fabric/api/resource/v1/pack/PackActivationType.d.ts'
import type { ModContainer } from '../../../../../../net/fabricmc/loader/api/ModContainer.d.ts'
import type { ModMetadata } from '../../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackLocationInfo } from '../../../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackResources$ResourceOutput } from '../../../../../../net/minecraft/server/packs/PackResources$ResourceOutput.d.ts'
import type { PackType } from '../../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { MetadataSectionType } from '../../../../../../net/minecraft/server/packs/metadata/MetadataSectionType.d.ts'
import type { KnownPack } from '../../../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { IoSupplier } from '../../../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
export class ModNioPackResources extends Object implements ModPackResources, PackResources {
    static METADATA_EXTENSION: string;
    static PACK_META: string;
    static create(paramarg0: string, paramarg1: ModContainer, paramarg2: string, paramarg3: PackType, paramarg4: PackActivationType, paramarg5: boolean): ModNioPackResources;
    static readNamespaces(paramarg0: Path[], paramarg1: string): JavaMap<PackType, string[]>;
    private constructor(arg0: string, arg1: ModContainer, arg2: Path[], arg3: PackType, arg4: PackActivationType, arg5: boolean, arg6: PackLocationInfo)
    readonly activationType: PackActivationType;
    // private basePaths: Path[];
    // private id: string;
    // private metadata: PackLocationInfo;
    // private mod: ModContainer;
    // private modBundled: boolean;
    // private namespaces: JavaMap<PackType, string[]>;
    // private type: PackType;
    close(): void;
    createOverlay(arg0: string): ModNioPackResources;
    getActivationType(): PackActivationType;
    getFabricModMetadata(): ModMetadata;
    getMetadataSection<T extends unknown>(arg0: MetadataSectionType<T>): T;
    getNamespaces(arg0: PackType): string[];
    // private getPath(arg0: string): Path;
    getResource(arg0: PackType, arg1: Identifier): () => InputStream;
    getRootResource(...arg0: string[]): () => InputStream;
    // private hasAbsentNs(arg0: string): boolean;
    knownPackInfo(): Optional<KnownPack>;
    listResources(arg0: PackType, arg1: string, arg2: string, arg3: (param0: Identifier, param1: () => InputStream) => void): void;
    location(): PackLocationInfo;
    // private openFile(arg0: string): () => InputStream;
    packId(): string;
}