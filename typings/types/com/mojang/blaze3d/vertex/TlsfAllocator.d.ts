import type { TlsfAllocator$Allocation } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator$Allocation.d.ts'
import type { TlsfAllocator$Block } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator$Block.d.ts'
import type { TlsfAllocator$Heap } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator$Heap.d.ts'
import type { TlsfAllocator$IndexPair } from '../../../../com/mojang/blaze3d/vertex/TlsfAllocator$IndexPair.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TlsfAllocator extends Object {
    constructor(heap: TlsfAllocator$Heap)
    // private firstLevelBitmap: number;
    // private freeLists: TlsfAllocator$Block[];
    // private secondLevelBitmap: number[];
    // private totalMemorySize: number;
    allocate(size: number, align: number): TlsfAllocator$Allocation;
    free(allocation: TlsfAllocator$Allocation): void;
    // private getBlockFromFreeList(firstLevelIndex: number, secondLevelIndex: number): TlsfAllocator$Block;
    // private getLevelIndex(size: number): TlsfAllocator$IndexPair;
    // private insertFreeBlock(block: TlsfAllocator$Block): void;
    isCompletelyFree(): boolean;
    // private mappingSearch(size: number): TlsfAllocator$IndexPair;
    // private mergeBlockWithNext(block: TlsfAllocator$Block): void;
    // private mergeBlockWithPrevious(block: TlsfAllocator$Block): void;
    printAllocatorStatistics(name: string): void;
    // private removeFreeBlock(block: TlsfAllocator$Block, firstLevel: number, secondLevel: number): void;
    // private setBlockFreeList(firstLevelIndex: number, secondLevelIndex: number, block: TlsfAllocator$Block): void;
    // private trimBlock(block: TlsfAllocator$Block, size: number): void;
}