import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos$MutableBlockPos } from '../../../../../../net/minecraft/core/BlockPos$MutableBlockPos.d.ts'
export interface ChunkRandomSource extends Object{
    lithium$getRandomPosInChunk(arg0: number, arg1: number, arg2: number, arg3: number, arg4: BlockPos$MutableBlockPos): void;
}