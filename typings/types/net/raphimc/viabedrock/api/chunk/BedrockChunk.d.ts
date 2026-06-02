import type { Tag } from '../../../../../com/viaversion/nbt/tag/Tag.d.ts'
import type { BlockPosition } from '../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { BlockEntity } from '../../../../../com/viaversion/viaversion/api/minecraft/blockentity/BlockEntity.d.ts'
import type { Chunk1_18 } from '../../../../../com/viaversion/viaversion/api/minecraft/chunks/Chunk1_18.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { BedrockBlockEntity } from '../../../../../net/raphimc/viabedrock/api/chunk/BedrockBlockEntity.d.ts'
import type { BedrockChunkSection } from '../../../../../net/raphimc/viabedrock/api/chunk/section/BedrockChunkSection.d.ts'
export class BedrockChunk extends Chunk1_18 {
    constructor(arg0: number, arg1: number, arg2: BedrockChunkSection[])
    constructor(arg0: number, arg1: number, arg2: BedrockChunkSection[], arg3: Map$Entry<string, Tag>[], arg4: BlockEntity[])
    readonly requestSubChunks: boolean;
    getBlockEntityAt(arg0: BlockPosition): BedrockBlockEntity;
    getSections(): BedrockChunkSection[];
    isRequestSubChunks(): boolean;
    removeBlockEntityAt(arg0: BlockPosition): void;
    setRequestSubChunks(arg0: boolean): void;
}