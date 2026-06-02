import type { Predicate } from '../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { HeightmapAccessor } from '../../../../../net/caffeinemc/mods/lithium/mixin/world/combined_heightmap_update/HeightmapAccessor.d.ts'
import type { BitStorage } from '../../../../../net/minecraft/util/BitStorage.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { ChunkAccess } from '../../../../../net/minecraft/world/level/chunk/ChunkAccess.d.ts'
import type { Heightmap$Types } from '../../../../../net/minecraft/world/level/levelgen/Heightmap$Types.d.ts'
export class Heightmap extends Object implements HeightmapAccessor {
    static primeHeightmaps(paramchunk: ChunkAccess, paramtypes: Heightmap$Types[]): void;
    constructor(chunk: ChunkAccess, heightmapType: Heightmap$Types)
    // private chunk: ChunkAccess;
    // private data: BitStorage;
    // private isOpaque: (param0: BlockState) => kotlin.Boolean;
    // private getFirstAvailable(index: number): number;
    getFirstAvailable(x: number, z: number): number;
    getHighestTaken(x: number, z: number): number;
    getRawData(): number[];
    // private setHeight(x: number, z: number, height: number): void;
    setRawData(chunk: ChunkAccess, type: Heightmap$Types, data: number[]): void;
    update(localX: number, localY: number, localZ: number, state: BlockState): boolean;
}