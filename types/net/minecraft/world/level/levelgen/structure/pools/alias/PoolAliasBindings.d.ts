import type { MapCodec } from '../../../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../../../../net/minecraft/core/Holder.d.ts'
import type { BootstrapContext } from '../../../../../../../../net/minecraft/data/worldgen/BootstrapContext.d.ts'
import type { StructureTemplatePool } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/pools/StructureTemplatePool.d.ts'
import type { PoolAliasBinding } from '../../../../../../../../net/minecraft/world/level/levelgen/structure/pools/alias/PoolAliasBinding.d.ts'
export class PoolAliasBindings extends Object {
    static bootstrap(paramregistry: (Object | null)[]): MapCodec<Object>;
    static registerTargetsAsPools(paramcontext: BootstrapContext<StructureTemplatePool>, paramemptyPool: Holder<StructureTemplatePool>, paramaliasBindings: PoolAliasBinding[]): void;
    constructor()
}