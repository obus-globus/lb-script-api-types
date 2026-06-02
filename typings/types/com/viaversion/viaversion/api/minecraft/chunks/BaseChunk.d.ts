import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BlockEntity } from '../../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Chunk } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { ChunkSection } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSection.d.ts'
import type { Heightmap } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Heightmap.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class BaseChunk extends Object implements Chunk {
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: BitSet, arg5: ChunkSection[], arg6: number[], arg7: Map$Entry<string, Tag>[], arg8: Map$Entry<string, Tag>[][])
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: number, arg5: ChunkSection[], arg6: number[], arg7: Map$Entry<string, Tag>[], arg8: Map$Entry<string, Tag>[][])
    constructor(arg0: number, arg1: number, arg2: boolean, arg3: boolean, arg4: number, arg5: ChunkSection[], arg6: number[], arg7: Map$Entry<string, Tag>[][])
    biomeData: number[];
    bitmask: number;
    readonly blockEntities: Map$Entry<string, Tag>[][];
    // private chunkSectionBitSet: BitSet;
    readonly fullChunk: boolean;
    heightMap: Map$Entry<string, Tag>[];
    ignoreOldLightData: boolean;
    sections: ChunkSection[];
    readonly x: number;
    readonly z: number;
    blockEntities(): BlockEntity[];
    getBiomeData(): number[];
    getBitmask(): number;
    getBlockEntities(): Map$Entry<string, Tag>[][];
    getChunkMask(): BitSet;
    getHeightMap(): Map$Entry<string, Tag>[];
    getSections(): ChunkSection[];
    getX(): number;
    getZ(): number;
    heightmaps(): Heightmap[];
    isBiomeData(): boolean;
    isFullChunk(): boolean;
    isIgnoreOldLightData(): boolean;
    setBiomeData(arg0: number[]): void;
    setBitmask(arg0: number): void;
    setChunkMask(arg0: BitSet): void;
    setHeightMap(arg0: Map$Entry<string, Tag>[]): void;
    setHeightmaps(arg0: Heightmap[]): void;
    setIgnoreOldLightData(arg0: boolean): void;
    setSections(arg0: ChunkSection[]): void;
}