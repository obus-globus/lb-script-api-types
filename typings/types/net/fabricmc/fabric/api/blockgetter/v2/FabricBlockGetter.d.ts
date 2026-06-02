import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export interface FabricBlockGetter extends Object{
    getBiomeFabric(arg0: BlockPos): Holder<Biome>;
    getBlockEntityRenderData(arg0: BlockPos): Object;
    hasBiomes(): boolean;
}