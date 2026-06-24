import type { TlsfAllocator$Heap } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator$Heap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TlsfAllocator$Block extends Object {
    private constructor(size: number, heap: TlsfAllocator$Heap, offsetFromHeap: number, nextFreeBlock: TlsfAllocator$Block, previousFreeBlock: TlsfAllocator$Block, nextPhysicalBlock: TlsfAllocator$Block, previousPhysicalBlock: TlsfAllocator$Block)
    heap: TlsfAllocator$Heap;
    nextFreeBlock: TlsfAllocator$Block;
    nextPhysicalBlock: TlsfAllocator$Block;
    offsetFromHeap: number;
    previousFreeBlock: TlsfAllocator$Block;
    previousPhysicalBlock: TlsfAllocator$Block;
    // private size: number;
    // private getSize(): number;
    // private isFree(): boolean;
    // private setFree(): void;
    // private setSize(size: number): void;
    // private setUsed(): void;
}