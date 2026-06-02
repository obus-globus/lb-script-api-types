import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { StructureTemplatePool } from '../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
export class TaigaVillagePools extends Object {
    static START: ResourceKey<StructureTemplatePool>;
    static bootstrap(paramcontext: BootstrapContext<StructureTemplatePool>): void;
    constructor()
}