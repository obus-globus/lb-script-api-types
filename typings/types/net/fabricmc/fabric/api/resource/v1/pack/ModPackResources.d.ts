import type { InputStream } from '../../../../../../../java/io/InputStream.d.ts'
import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModMetadata } from '../../../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { PackLocationInfo } from '../../../../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackResources$ResourceOutput } from '../../../../../../../net/minecraft/server/packs/PackResources$ResourceOutput.d.ts'
import type { PackType } from '../../../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { KnownPack } from '../../../../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
import type { IoSupplier } from '../../../../../../../net/minecraft/server/packs/resources/IoSupplier.d.ts'
export interface ModPackResources extends Object, PackResources {
    close(): void;
    createOverlay(arg0: string): ModPackResources;
    getFabricModMetadata(): ModMetadata;
    knownPackInfo(): Optional<KnownPack>;
    listResources(type: PackType, namespace: string, directory: string, output: (param0: Identifier, param1: () => InputStream) => void): void;
    location(): PackLocationInfo;
    packId(): string;
}