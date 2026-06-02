import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { StructureTemplatePool } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
export interface PoolAliasLookup extends Object{
    lookup(alias: ResourceKey<StructureTemplatePool>): ResourceKey<StructureTemplatePool>;
}