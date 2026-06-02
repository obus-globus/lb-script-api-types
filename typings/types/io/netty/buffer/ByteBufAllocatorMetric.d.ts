import type { Object } from '../../../java/lang/Object.d.ts'
export interface ByteBufAllocatorMetric extends Object{
    usedDirectMemory(): number;
    usedHeapMemory(): number;
}