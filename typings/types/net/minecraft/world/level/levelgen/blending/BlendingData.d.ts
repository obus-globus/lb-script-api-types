import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Direction8 } from '../../../../../../net/minecraft/core/Direction8.d.ts'
import type { Holder } from '../../../../../../net/minecraft/core/Holder.d.ts'
import type { WorldGenRegion } from '../../../../../../net/minecraft/server/level/WorldGenRegion.d.ts'
import type { LevelHeightAccessor } from '../../../../../../net/minecraft/world/level/LevelHeightAccessor.d.ts'
import type { WorldGenLevel } from '../../../../../../net/minecraft/world/level/WorldGenLevel.d.ts'
import type { Biome } from '../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
import type { ChunkAccess } from '../../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { BlendingData$BiomeConsumer } from '../../../../../../net/minecraft/world/level/levelgen/blending/BlendingData$BiomeConsumer.d.ts'
import type { BlendingData$DensityConsumer } from '../../../../../../net/minecraft/world/level/levelgen/blending/BlendingData$DensityConsumer.d.ts'
import type { BlendingData$HeightConsumer } from '../../../../../../net/minecraft/world/level/levelgen/blending/BlendingData$HeightConsumer.d.ts'
import type { BlendingData$Packed } from '../../../../../../net/minecraft/world/level/levelgen/blending/BlendingData$Packed.d.ts'
export class BlendingData extends Object {
    static getOrUpdateBlendingData(paramregion: WorldGenRegion, paramchunkX: number, paramchunkZ: number): BlendingData;
    static sideByGenerationAge(paramregion: WorldGenLevel, paramchunkX: number, paramchunkZ: number, paramwantedOldGen: boolean): Direction8[];
    static unpack(parampacked: BlendingData$Packed): BlendingData;
    private constructor(minSection: number, maxSection: number, heights: Optional<number[]>)
    readonly areaWithOldGeneration: LevelHeightAccessor;
    // private biomes: Holder<Biome>[][];
    // private densities: number[][];
    // private hasCalculatedData: boolean;
    // private heights: number[];
    // private addValuesForColumn(index: number, chunk: ChunkAccess, blockX: number, blockZ: number): void;
    // private calculateData(chunk: ChunkAccess, newSides: Direction8[]): void;
    // private cellCountPerColumn(): number;
    getAreaWithOldGeneration(): LevelHeightAccessor;
    // private getBiomeColumn(chunk: ChunkAccess, blockX: number, blockZ: number): Holder<Biome>[];
    // private getCellYIndex(cellY: number): number;
    // private getColumnMinY(): number;
    // private getDensity(densityColumn: number[], cellY: number): number;
    getDensity(cellX: number, cellY: number, cellZ: number): number;
    // private getDensityColumn(chunk: ChunkAccess, x: number, z: number, height: number): number[];
    getHeight(cellX: number, cellY: number, cellZ: number): number;
    // private getHeightAtXZ(chunk: ChunkAccess, blockX: number, blockZ: number): number;
    // private getMinY(): number;
    iterateBiomes(minCellX: number, quartY: number, minCellZ: number, biomeConsumer: BlendingData$BiomeConsumer): void;
    iterateDensities(minCellX: number, minCellZ: number, fromCellY: number, toCellY: number, densityConsumer: BlendingData$DensityConsumer): void;
    iterateHeights(minCellX: number, minCellZ: number, heightConsumer: BlendingData$HeightConsumer): void;
    pack(): BlendingData$Packed;
    // private quartCountPerColumn(): number;
}