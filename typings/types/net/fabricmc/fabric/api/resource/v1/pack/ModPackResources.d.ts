import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ModMetadata } from '../../../../../../../net/fabricmc/loader/api/metadata/ModMetadata.d.ts'
import type { PackResources } from '../../../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { KnownPack } from '../../../../../../../net/minecraft/server/packs/repository/KnownPack.d.ts'
export interface ModPackResources extends Object, PackResources{
    createOverlay(arg0: string): ModPackResources;
    getFabricModMetadata(): ModMetadata;
    knownPackInfo(): Optional<KnownPack>;
    packId(): string;
}