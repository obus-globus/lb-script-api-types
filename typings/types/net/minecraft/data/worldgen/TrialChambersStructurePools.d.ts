import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BootstrapContext } from '../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { ResourceKey } from '../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { StructureTemplatePool } from '../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
import type { PoolAliasBinding } from '../../../../net/minecraft/world/level/levelgen/structure/pools/alias/PoolAliasBinding.d.ts'
export class TrialChambersStructurePools extends Object {
    static ALIAS_BINDINGS: PoolAliasBinding[];
    static HALLWAY_FALLBACK: ResourceKey<StructureTemplatePool>;
    static START: ResourceKey<StructureTemplatePool>;
    static bootstrap(paramcontext: BootstrapContext<StructureTemplatePool>): void;
    static spawner(paramalias: string): string;
    constructor()
}