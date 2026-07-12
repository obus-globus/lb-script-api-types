import type { StorableObject } from '../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { Chunk } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk.d.ts'
import type { DataPalette } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/DataPalette.d.ts'
import type { IdAndData } from '../../../../../com/viaversion/viaversion/util/IdAndData.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ChunkCoord } from '../../../../../net/raphimc/vialegacy/api/model/ChunkCoord.d.ts'
export abstract class AbstractChunkTracker extends Object implements StorableObject {
    constructor(...arg0: number[])
    // private chunks: Map<ChunkCoord, Chunk>;
    // private replacements: { [key: string]: any };
    // private toTrack: (Object | null)[];
    // private trackAll: boolean;
    clear(): void;
    getBlock(arg0: BlockPosition): IdAndData;
    getBlock(arg0: number, arg1: number, arg2: number): IdAndData;
    getBlockNotNull(arg0: BlockPosition): IdAndData;
    getBlockNotNull(arg0: number, arg1: number, arg2: number): IdAndData;
    // private hasRemappableBlocks(arg0: DataPalette): boolean;
    isChunkLoaded(arg0: number, arg1: number): boolean;
    onRemove(): void;
    postRemap(arg0: DataPalette): void;
    registerReplacement(arg0: IdAndData, arg1: IdAndData): void;
    remapBlock(arg0: IdAndData, arg1: number, arg2: number, arg3: number): void;
    remapBlockParticle(arg0: IdAndData): void;
    trackAndRemap(arg0: BlockPosition, arg1: IdAndData): void;
    trackAndRemap(arg0: Chunk): void;
}