import type { BlockChangeRecord } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockChangeRecord.d.ts'
import type { BlockPosition } from '../../../../../../../com/viaversion/viaversion/api/minecraft/BlockPosition.d.ts'
import type { BaseChunk } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/BaseChunk.d.ts'
import type { ChunkSection } from '../../../../../../../com/viaversion/viaversion/api/minecraft/chunks/ChunkSection.d.ts'
export class NonFullChunk extends BaseChunk {
    constructor(arg0: number, arg1: number, arg2: number, arg3: ChunkSection[], arg4: BlockPosition, arg5: BlockPosition)
    readonly endPos: BlockPosition;
    readonly startPos: BlockPosition;
    asBlockChangeRecords(): BlockChangeRecord[];
    getEndPos(): BlockPosition;
    getStartPos(): BlockPosition;
}