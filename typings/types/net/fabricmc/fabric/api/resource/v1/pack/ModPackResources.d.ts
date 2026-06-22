import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModMetadata } from '../../../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { PackLocationInfo } from '../../../../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { PackResources$ResourceOutput } from '../../../../../../../net/minecraft/server/packs/PackResources$ResourceOutput.d.ts'
import type { PackType } from '../../../../../../../net/minecraft/server/packs/PackType.d.ts'
import type { KnownPack } from '../../../../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
export interface ModPackResources extends Object, PackResources {
    close(): void;
    createOverlay(arg0: string): ModPackResources;
    getFabricModMetadata(): ModMetadata;
    knownPackInfo(): Optional<KnownPack>;
    listResources(type: PackType, namespace: string, directory: string, output: (param0: Object | null, param1: Object | null) => void): void;
    location(): PackLocationInfo;
    packId(): string;
}