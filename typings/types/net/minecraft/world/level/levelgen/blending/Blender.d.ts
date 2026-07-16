import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Direction8 } from '../../../../../../net/minecraft/core/Direction8.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { WorldGenRegion } from '../../../../../../net/minecraft/server/level/WorldGenRegion.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { BiomeResolver } from '../../../../../../net/minecraft/world/level/biome/BiomeResolver.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { ProtoChunk } from '../../../../../../net/minecraft/world/level/chunk/ProtoChunk.d.ts'
import type { DensityFunction$FunctionContext } from '../../../../../../net/minecraft/world/level/levelgen/DensityFunction$FunctionContext.d.ts'
import type { Blender$BlendingOutput } from '../../../../../../net/minecraft/world/level/levelgen/blending/Blender$BlendingOutput.d.ts'
import type { Blender$CellValueGetter } from '../../../../../../net/minecraft/world/level/levelgen/blending/Blender$CellValueGetter.d.ts'
import type { Blender$DistanceGetter } from '../../../../../../net/minecraft/world/level/levelgen/blending/Blender$DistanceGetter.d.ts'
import type { BlendingData } from '../../../../../../net/minecraft/world/level/levelgen/blending/BlendingData.d.ts'
export class Blender extends Object {
    static addAroundOldChunksCarvingMaskFilter(paramregion: WorldGenLevel, paramchunk: ProtoChunk): void;
    static empty(): Blender;
    static generateBorderTicks(paramregion: WorldGenRegion, paramchunk: ChunkAccess): void;
    static makeOldChunkDistanceGetter(paramcenterBlendingData: BlendingData, paramoldSidesBlendingData: Map<Direction8, BlendingData>): Blender$DistanceGetter;
    static of(paramregion: WorldGenRegion): Blender;
    private constructor(heightAndBiomeBlendingData: { [key: string]: any }, densityBlendingData: { [key: string]: any })
    // private densityBlendingData: { [key: string]: any };
    // private heightAndBiomeBlendingData: { [key: string]: any };
    // private blendBiome(quartX: number, quartY: number, quartZ: number): Holder<Biome>;
    blendDensity(context: DensityFunction$FunctionContext, noiseValue: number): number;
    blendOffsetAndFactor(blockX: number, blockZ: number): Blender$BlendingOutput;
    getBiomeResolver(biomeResolver: BiomeResolver): BiomeResolver;
    // private getBlendingDataValue(cellX: number, cellY: number, cellZ: number, cellValueGetter: Blender$CellValueGetter): number;
    // private getBlendingDataValue(cellValueGetter: Blender$CellValueGetter, chunkX: number, chunkZ: number, cellX: number, cellY: number, cellZ: number): number;
    isEmpty(): boolean;
}