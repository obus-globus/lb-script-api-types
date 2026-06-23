import type { Path } from '../../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { PackLocationInfo } from '../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { Pack$Metadata } from '../../../../net/minecraft/server/packs/repository/Pack$Metadata.d.ts'
import type { Pack$ResourcesSupplier } from '../../../../net/minecraft/server/packs/repository/Pack$ResourcesSupplier.d.ts'
export class PathPackResources$PathResourcesSupplier extends Object implements Pack$ResourcesSupplier {
    constructor(content: Path[])
    // private content: Path[];
    openFull(location: PackLocationInfo, metadata: Pack$Metadata): PackResources;
    openPrimary(location: PackLocationInfo): PackResources;
}