import type { TlsfAllocator$Block } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator$Block.d.ts'
import type { TlsfAllocator$Heap } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator$Heap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TlsfAllocator$Allocation extends Object {
    private constructor(block: TlsfAllocator$Block, offsetFromHeap: number)
    // private block: TlsfAllocator$Block;
    readonly freed: boolean;
    readonly offsetFromHeap: number;
    getHeap(): TlsfAllocator$Heap;
    getOffsetFromHeap(): number;
    getSize(): number;
    isFreed(): boolean;
}