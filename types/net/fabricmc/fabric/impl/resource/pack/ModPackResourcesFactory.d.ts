import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModPackResources } from '../../../../../../net/fabricmc/fabric/api/resource/v1/pack/ModPackResources.d.ts'
import type { PackLocationInfo } from '../../../../../../net/minecraft/server/packs/PackLocationInfo.d.ts'
import type { PackResources } from '../../../../../../net/minecraft/server/packs/PackResources.d.ts'
import type { Pack$Metadata } from '../../../../../../net/minecraft/server/packs/repository/Pack$Metadata.d.ts'
import type { Pack$ResourcesSupplier } from '../../../../../../net/minecraft/server/packs/repository/Pack$ResourcesSupplier.d.ts'
export class ModPackResourcesFactory extends Record implements Pack$ResourcesSupplier {
    constructor(pack: ModPackResources)
    // private pack: ModPackResources;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    openFull(arg0: PackLocationInfo, arg1: Pack$Metadata): PackResources;
    openPrimary(arg0: PackLocationInfo): PackResources;
    pack(): ModPackResources;
    toString(): string;
}