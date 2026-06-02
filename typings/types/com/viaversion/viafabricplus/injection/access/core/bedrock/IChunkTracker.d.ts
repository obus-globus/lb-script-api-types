import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface IChunkTracker extends Object{
    viaFabricPlus$getChunks(): number;
    viaFabricPlus$getPendingSubChunks(): number;
    viaFabricPlus$getSubChunkRequests(): number;
}