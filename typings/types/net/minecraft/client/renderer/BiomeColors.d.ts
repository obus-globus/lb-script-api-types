import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BlockAndTintGetter } from '../../../../net/minecraft/client/renderer/block/BlockAndTintGetter.d.ts'
import type { BlockPos } from '../../../../net/minecraft/core/BlockPos.d.ts'
import type { ColorResolver } from '../../../../net/minecraft/world/level/ColorResolver.d.ts'
import type { Biome } from '../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class BiomeColors extends Object {
    static DRY_FOLIAGE_COLOR_RESOLVER: (param0: Biome, param1: number, param2: number) => number;
    static FOLIAGE_COLOR_RESOLVER: (param0: Biome, param1: number, param2: number) => number;
    static GRASS_COLOR_RESOLVER: (param0: Biome, param1: number, param2: number) => number;
    static WATER_COLOR_RESOLVER: (param0: Biome, param1: number, param2: number) => number;
    static getAverageDryFoliageColor(paramlevel: BlockAndTintGetter, parampos: BlockPos): number;
    static getAverageFoliageColor(paramlevel: BlockAndTintGetter, parampos: BlockPos): number;
    static getAverageGrassColor(paramlevel: BlockAndTintGetter, parampos: BlockPos): number;
    static getAverageWaterColor(paramlevel: BlockAndTintGetter, parampos: BlockPos): number;
    constructor()
}