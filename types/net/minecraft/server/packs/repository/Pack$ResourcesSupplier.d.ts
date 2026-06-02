import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PackLocationInfo } from '../../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { Pack$Metadata } from '../../../../../net/minecraft/server/packs/repository/Pack$Metadata.d.ts'
export interface Pack$ResourcesSupplier extends Object{
    openFull(location: PackLocationInfo, metadata: Pack$Metadata): PackResources;
    openPrimary(location: PackLocationInfo): PackResources;
}