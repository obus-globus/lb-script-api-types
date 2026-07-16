import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { LevelBiomeSlice$BiasMap } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/biome/LevelBiomeSlice$BiasMap.d.ts'
import type { ChunkRenderContext } from '../../../../../../../net/caffeinemc/mods/sodium/client/world/cloned/ChunkRenderContext.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { Holder } from '../../../../../../../net/minecraft/core/Holder.d.ts'
import type { Level } from '../../../../../../../net/minecraft/world/level/Level.d.ts'
import type { Biome } from '../../../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class LevelBiomeSlice extends Object {
    constructor()
    // private bias: LevelBiomeSlice$BiasMap;
    // private biomeZoomSeed: number;
    // private biomes: Holder<Biome>[];
    // private blockX: number;
    // private blockY: number;
    // private blockZ: number;
    // private uniform: boolean[];
    // private calculateBias(): void;
    // private calculateBias(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number): void;
    // private calculateUniform(): void;
    // private copyBiomeData(arg0: Level, arg1: ChunkRenderContext): void;
    // private copySectionBiomeData(arg0: ChunkRenderContext, arg1: number, arg2: number, arg3: number, arg4: Holder<Biome>): void;
    getBiome(arg0: number, arg1: number, arg2: number): Holder<Biome>;
    // private getBiomeUsingVoronoi(arg0: number, arg1: number, arg2: number): Holder<Biome>;
    // private hasUniformNeighbors(arg0: number, arg1: number, arg2: number): boolean;
    update(arg0: ClientLevel, arg1: ChunkRenderContext): void;
}