import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementFilter } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementFilter.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
export class SurfaceWaterDepthFilter extends PlacementFilter {
    static CODEC: MapCodec<SurfaceWaterDepthFilter>;
    static forMaxDepth(parammaxWaterDepth: number): SurfaceWaterDepthFilter;
    private constructor(maxWaterDepth: number)
    // private maxWaterDepth: number;
    shouldPlace(context: PlacementContext, random: RandomSource, origin: BlockPos): boolean;
    type(): PlacementModifierType<any>;
}