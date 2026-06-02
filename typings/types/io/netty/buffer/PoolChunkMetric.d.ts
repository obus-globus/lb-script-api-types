import type { Object } from '../../../java/lang/Object.d.ts'
export interface PoolChunkMetric extends Object{
    chunkSize(): number;
    freeBytes(): number;
    usage(): number;
}