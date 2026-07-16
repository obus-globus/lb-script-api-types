import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { RandomSource } from '../../../../../../net/minecraft/util/RandomSource.d.ts'
import type { Heightmap$Types } from '../../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
import type { PlacementContext } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementContext.d.ts'
import type { PlacementFilter } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementFilter.d.ts'
import type { PlacementModifierType } from '../../../../../../net/minecraft/world/level/levelgen/placement/PlacementModifierType.d.ts'
export class SurfaceRelativeThresholdFilter extends PlacementFilter {
    static CODEC: MapCodec<SurfaceRelativeThresholdFilter>;
    static of(paramheightmap: Heightmap$Types, paramminInclusive: number, parammaxInclusive: number): SurfaceRelativeThresholdFilter;
    private constructor(heightmap: Heightmap$Types, minInclusive: number, maxInclusive: number)
    // private heightmap: Heightmap$Types;
    // private maxInclusive: number;
    // private minInclusive: number;
    shouldPlace(context: PlacementContext, random: RandomSource, origin: BlockPos): boolean;
    type(): PlacementModifierType<any>;
}