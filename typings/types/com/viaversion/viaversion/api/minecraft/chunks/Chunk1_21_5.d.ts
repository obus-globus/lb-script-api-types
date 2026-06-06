import type { Tag } from '../../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BlockEntity } from '../../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Chunk } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { ChunkSection } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSection.d.ts'
import type { Heightmap } from '../../../../../../com/viaversion/viaversion/api/minecraft/chunks/Heightmap.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
export class Chunk1_21_5 extends Object implements Chunk {
    constructor(arg0: number, arg1: number, arg2: ChunkSection[], arg3: Heightmap[], arg4: BlockEntity[])
    heightmaps: Heightmap[];
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